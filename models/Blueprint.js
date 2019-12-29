const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Blueptrint = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  blueprintPath: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now()
  }
});
