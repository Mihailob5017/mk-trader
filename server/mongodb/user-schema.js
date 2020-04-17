const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, maxlength: 20 },
    lastname: { type: String, maxlength: 20 },
    username: {
      type: String,
      minlength: 4,
      maxlength: 25,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      minlength: 6,
      maxlength: 50,
      required: true,
      unique: true,
    },
    avatarType: { type: String, required: true },
    password: { type: String, minlength: 5, maxlength: 1024, required: true },
    willAddItemsToStore: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
    dateOfBirth: { type: Date, default: '' },
    currentCity: { type: String, minlength: 2, maxlength: 30 },
    currentAddres: { type: String, minlength: 3, maxlength: 60 },
    cartItems: { type: Array, required: true, default: [] },
    scoredItems: { type: Object, required: true, default: {} },
  },
  { minimize: false }
);

module.exports = mongoose.model('users', UserSchema);
