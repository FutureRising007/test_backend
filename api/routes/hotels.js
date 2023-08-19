import express from "express";

import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body)

  try{
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  }catch(err){
    res.status(500).json(err);
  }
});

//  GET
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try{
    const hotel = await Hotel.findById(req.params.id);
    req.status(200).json(hotel);
  }catch(err){
    res.status(500).json(err);
  }
});


export default router;
