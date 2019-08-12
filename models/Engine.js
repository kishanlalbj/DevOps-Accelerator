const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EngineSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  tools: [
    {
      nickName: {
        type: String
      },
      toolId: {
        type: Schema.Types.ObjectId,
        ref: "tools"
      }
    }
  ]
});

const EngineModel = mongoose.model("Engine", EngineSchema);

module.exports = EngineModel;
