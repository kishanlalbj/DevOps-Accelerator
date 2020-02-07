const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CredentialSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Credential = mongoose.model("credential", CredentialSchema);

module.exports = Credential;
