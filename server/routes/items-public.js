const Router = require('express').Router();
const mongoose = require('mongoose');

//  Item Model
const Item = require('../mongodb/item-schema');

//  Get all Store Items

Router.get('/items', async (req, res) => {
  try {
    const data = await Item.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong with fetching all the items',
      error
    });
  }
});

//  Get Filtered Items by a specific Param
Router.get('/items/:filter', async (req, res) => {
  try {
  } catch (error) {}
});

// Get Sorted Items by a specific param - ascending

Router.get('/items/asc', async (req, res) => {
  try {
  } catch (error) {}
});

//  Get Sorted Items by a specific param - descending

Router.get('/items/desc', async (req, res) => {
  try {
  } catch (error) {}
});

//  Search for a specific item by name

Router.get('/items/:name', async (req, res) => {
  try {
  } catch (error) {}
});
