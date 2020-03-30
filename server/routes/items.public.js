const Router = require('express').Router();
const ItemModel = require('../mongodb/item-schema');
const { filterAndSort } = require('../helpers/helper-functions');
//  Get all Store Items
Router.get('/', async (req, res) => {
  try {
    const data = await ItemModel.find();
    res.send(data);
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong with fetching all the items',
      error
    });
  }
});

Router.get('/handled', async (req, res) => {
  try {
    const data = await ItemModel.find();
    const handledData = filterAndSort(data, req.body);
    res.send(handledData);
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error
    });
  }
});

module.exports = Router;
