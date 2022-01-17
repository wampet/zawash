const express = require('express');
const mongoose = require('mongoose');
const VehicleRegister = require('../models/VehicleRegister');
const WasherRegister = require('../models/WasherRegister');
const ExpenseTrack = require('../models/ExpenseTrack');
const moment = require('moment');
const router = express.Router();

router.get('/payout', async (req, res) => {
    try {
        // We use moment to get selected date and default date. We also determine the format used
        let selectedDate = moment().format('YYYY-MM-DD')
        if (req.query.searchdate)
            selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')

        // based on selected date , query to get the count of vehicles per washer,
        //  &  payout per washer.
        let washedVehicles = await VehicleRegister.aggregate(
            [ {$match: { dateIn: new Date(selectedDate) }},
            { $group: { _id: '$washer', count: { $sum: 1 }, totalPayout: { $sum: '$washerFee' } } },
            { $lookup: { from: 'washerregisters', localField: '_id', foreignField: '_id', as: "details" } }
            ])
            console.log(washedVehicles);
        // get the total payout for all the washers based on the selected date
        let totalPayoutPerDay = await VehicleRegister.aggregate([
                { $match: { dateIn: new Date(selectedDate) } },
                { $group: { _id: '$dateIn', totalPayoutPerDay: { $sum: '$washerFee' } } }
            ])
        // pass the all the relevant data as you render the payout report
        res.render("car_washer_payout", { washers: washedVehicles, 
            title: "List of Car Washers", defaultDate: selectedDate ,
            sumPayout:totalPayoutPerDay[0]})
    }
    catch (err) {
        console.log(err)
        res.send('Failed to retrive payout details');
    }
})


//Dont touch the doe in this case, its for the tracking expense pug this time
router.get('/expenses-report', async (req, res) => {
    try {
        let selectedDate = moment().format('YYYY-MM-DD')
        if (req.query.searchdate)
            selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')

        // query for returning all expenses on a day
        let expenseDetails = await ExpenseTrack.find({ doe: selectedDate })

        // query for total expense on a day
        let totalExpense = await ExpenseTrack.aggregate([
            { $match: { doe: new Date(selectedDate) } },
            { $group: { _id: '$doe', totalExpense: { $sum: '$amount' } } }
        ])

        res.render("expense_report", {
            expenses: expenseDetails, total: totalExpense[0],
            title: "Expenses", defaultDate: selectedDate
        })
    } catch (err) {
        console.log(err)
        res.send('Failed to retrive Expense details');
    }
})

//We then use the router to respond to any requests to the endpoint
//router.get tells the server what to do when a get request at a given route/path is called.
router.get('/collection', async (req, res) => {
    try {
        //here we  use moment to get the date. We also change its format
        let selectedDate = moment().format('YYYY-MM-DD')
        if (req.query.searchdate) {
            selectedDate = moment(req.query.searchdate).format('YYYY-MM-DD')

        let collectionDetails = await VehicleRegister.find({ dateIn: selectedDate })

        // query for total expense on a day
        let totalCollection = await VehicleRegister.aggregate([
            { $match: { dateIn: new Date(selectedDate) } },
            { $group: { _id: '$dateIn', totalCollection: { $sum: '$packagePrice' } } }
        ])

        res.render("collection_report", {
            collections: collectionDetails, total: totalCollection[0],
            title: "Collections", defaultDate: selectedDate
        });
    }else if (req.query.start_date && req.query.end_date) {
        let start_date = moment(req.query.start_date).format("YYYY-MM-DD");
        let end_date = moment(req.query.end_date).format("YYYY-MM-DD");
  
        // query za data --- where start_date >= date <= end_date
  
        let collectionDetails = await VehicleRegister.find({
          date: { $lte: end_date, $gte: start_date },
        });
        let totalCollection = await VehicleRegister.aggregate([
          {
            $match: {
              date: { $lte: new Date(end_date), $gte: new Date(start_date) },
            },
          },
          {
            $group: { _id: "$dateIn", totalCollection: { $sum: "$packagePrice" } },
          },
        ]);
        // console.log(totalCollection)
        let total_amount = 0;
        for (let x = 0; x < totalCollection.length; x++) {
          total_amount += totalCollection[x].totalCollection;
        }
        // console.log(total_amount)
  
        res.render("collection_report", {
          collections: collectionDetails,
          title: "Collections",
          total: { _id: "", totalCollection: total_amount },
        });
      } else {
        res.render("collection_report", {
          alert: req.query.alert,
          collections: {
            datetimeArrival: "",
            packagePrice: "",
            numberplate: "",
            make: "",
          },
        });
      }
    
    } catch (err) {
        console.log(err)
        res.send('Failed to retrive collections details');
    }
});


router.get('/washer-details', async (req, res) => {
    try {
        // find all the data in the Washers collection
        let washerDetails = await WasherRegister.find();
        res.render('car_washer_details', { users: washerDetails, title: 'Washer Details' })
    } catch (err) {
        console.log(err)
        res.send('Failed to retrive washer details');
    }
})

module.exports = router;