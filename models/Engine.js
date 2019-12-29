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
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  blueprint: {
    type: String,
    required: true
  },
  tools: [
    {
      name: {
        type: String
      }
    }
  ]
});

const EngineModel = mongoose.model("Engine", EngineSchema);

module.exports = EngineModel;
