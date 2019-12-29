const Engine = require("../../models/Engine");

const getEngines = (userid, successCB, errorCB) => {
  Engine.find({ user: userid })
    .then(engines => {
      successCB(engines);
    })
    .catch(err => {
      errorCB(err);
    });
};

const addEngine = (data, successCB, errorCB) => {
  let newEngine = new Engine({
    name: data.name,
    description: data.description,
    user: data.user,
    blueprint: data.blueprint,
    status: data.status,
    tools: data.tools
  });
  newEngine
    .save()
    .then(engine => {
      successCB(engine);
    })
    .catch(err => {
      errorCB(err);
    });
};

module.exports = {
  getEngines,
  addEngine
};
