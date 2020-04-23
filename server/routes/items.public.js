const Router = require('express').Router();
const ItemModel = require('../mongodb/item-schema');
const { filterAndSort, searchForItems } = require('../helpers/item-handler');

//  Get all Store Items
Router.get('/', async (req, res) => {
  try {
    const data = await ItemModel.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong with fetching all the items',
      error,
    });
  }
});

//  Filters & sorts all the items by the request params
Router.get('/handled', async (req, res) => {
  try {
    const data = await ItemModel.find();
    const handledData = filterAndSort(data, req.body);
    res.send(handledData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
});

//  Grabs all the items and filters out by name
Router.post('/search', async (req, res) => {
  const { name } = req.body;
  try {
    const responseData = await ItemModel.find();
    res.send(searchForItems(responseData, name));
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
});

module.exports = Router;
