const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toolSchema = new Schema({
  toolName: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  toolType: {
    type: String,
    require: true
  },
  toolUrl: {
    type: String,
    required: true
  },
  toolUsername: {
    type: String,
    required: true,
    trim
  },
  toolPassword: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now()
  }
});

const ToolModel = mongoose.model("Tool", toolSchema);

module.exports = ToolModel;
