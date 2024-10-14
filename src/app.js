const express = require("express");
const app = express();
const { Musician, Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get("/musicians", async (req, res) => {
    let allMusicians = await Musician.findAll();
    res.json(allMusicians)
});

app.get("/musicians/:id", async (req, res) => {
    console.log(req.params, 'req.params');
  let musician = await Musician.findByPk(req.params.id);
  res.json(musician);
});

app.get("/bands", async (req, res) => {
    let allBands = await Band.findAll();
    console.log(allBands, 'allBands')
    res.json(allBands)
});


module.exports = app;