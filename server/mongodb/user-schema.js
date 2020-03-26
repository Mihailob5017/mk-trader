const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: { type: String, maxlength: 20 },
  lastname: { type: String, maxlength: 20 },
  username: {
    type: String,
    minlength: 4,
    maxlength: 25,
    unique: true,
    required: true
  },
  email: {
    type: String,
    minlength: 6,
    maxlength: 50,
    required: true,
    unique: true
  },
  password: { type: String, minlength: 6, maxlength: 25, required: true },
  willAddItemsToStore: { type: Boolean, required: true },
  profileCreation: { type: Date },
  dateOfBirth: { type: Date },
  currentCity: { type: String, minlength: 2, maxlength: 30 },
  currentAddres: { type: String, minlength: 3, maxlength: 60 },
  cartItemsId: { type: String, required: true },
  storeItemsId: { type: String, required: true }
});
