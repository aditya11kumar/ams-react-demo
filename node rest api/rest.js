// import express from "express"

// import cors from "cors"

// import mongoose from "mongoose"

// const mysql = require('mysql');
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


// configuration



const app = express()

app.use(express.json())

app.use(express.urlencoded())

app.use(cors())



mongoose.connect("mongodb://127.0.0.1:27017/form", {

  useNewUrlParser: true,

  useUnifiedTopology: true

}, () => {

  console.log("DB connected")

})



const userSchema = new mongoose.Schema({

  firstName: String,

  middleName: String,

  lastName: String,

  phoneNumber: String,

  email: String,

  address: String,

  education: String,

  techSkills: String,

  dateOfBirth: String,

  //gender: String

})



const User = new mongoose.model("User", userSchema)







// Routes

app.post("/form", (req, res) => {

  // console.log(req.body)

  const { firstName, middleName, lastName, phoneNumber, email, address, education, techSkills, dateOfBirth } = req.body

  User.findOne({ email: email }, (err, user) => {

    if (user) {

      res.send({ massage: "user already registered" })

    } else {

      const user = new User({

        firstName: firstName,

        middleName: middleName,

        lastName: lastName,

        phoneNumber: phoneNumber,

        email: email,

        address: address,

        education: education,

        techSkills: techSkills,

        dateOfBirth: dateOfBirth,

        //gender: gender

      })

      user.save(err => {

        if (err) {

          res.send(err)

        } else {

          res.send({ massage: "Successfully Registered" })

        }

      })

    }

  })

})



app.get("/api/data", async (req, res) => {

  try {

    const allUser = await User.find({});

    res.send({ status: "ok", data: allUser });

  } catch (error) {

    console.log(error)

  }

})



app.listen(8000, () => {

  console.log("Started")

})