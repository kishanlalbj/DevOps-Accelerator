const Blueprint = require("../../models/Blueprint");

const addBlueprint = (blueprint, successCB, errorCB) => {
  let newBP = new Blueprint({
    name: blueprint.name,
    description: blueprint.description,
    category: blueprint.category,
    blueprintData: blueprint.blueprintData
  });
  newBP
    .save()
    .then(blueprint => {
      successCB(blueprint);
    })
    .catch(err => {
      errorCB(err);
    });
};

const getAllBlueprints = (successCB, errorCB) => {
  Blueprint.find()
    .then(blueprints => {
      successCB(blueprints);
    })
    .catch(err => {
      errorCB(err);
    });
};

const getBlueprint = (bpid, successCB, errorCB) => {
  Blueprint.find({ _id: bpid })
    .then(blueprint => {
      successCB(blueprint);
    })
    .catch(err => {
      errorCB(err);
    });
};

module.exports = {
  addBlueprint,
  getAllBlueprints,
  getBlueprint
};
