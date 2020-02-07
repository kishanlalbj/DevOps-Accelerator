const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EngineSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    default: "active"
  },
  blueprintName: {
    type: String,
    required: true
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  tools: [
    {
      type: Schema.Types.ObjectId,
      ref: "tools"
    }
  ],
  createdOn: {
    type: Date,
    default: Date.now()
  }
});

const EngineModel = mongoose.model("Engine", EngineSchema);

module.exports = EngineModel;
