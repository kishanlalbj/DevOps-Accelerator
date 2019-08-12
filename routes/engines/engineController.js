const Engine = require("../../models/Engine");

const getEngines = (successCB, errorCB) => {
  Engine.find()
    .then(engines => {
      successCB(engines);
    })
    .catch(err => {
      errorCB(err);
    });
};

const addEngine = (data, successCB, errorCB) => {
  let newEngine = {
    name: data.engineName
  };
};

module.exports = {
  getEngines
};
