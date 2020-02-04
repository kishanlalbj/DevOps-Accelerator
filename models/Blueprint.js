const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlueptrintSChema = new Schema({
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
  blueprintData: {
    type: Object,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now()
  }
});

const Blueprint = mongoose.model("blueprint", BlueptrintSChema);

module.exports = Blueprint;
