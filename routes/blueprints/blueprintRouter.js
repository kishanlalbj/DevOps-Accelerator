const router = require("express").Router();
const blueprintController = require("./blueprintController");

router.get("/all", (req, res) => {
  try {
    blueprintController.getAllBlueprints(
      blueprints => {
        res.send(blueprints);
      },
      err => {
        throw err;
      }
    );
  } catch (error) {
    res.send(500).send({ message: "Internal Server Error" });
  }
});

router.post("/add", (req, res) => {
  try {
    blueprintController.addBlueprint(
      req.body,
      blueprint => {
        res.send(blueprint);
      },
      err => {
        throw err;
      }
    );
  } catch (error) {
    res.send(500).send({ message: "Internal Server Error" });
  }
});

router.get("/:id", (req, res) => {
  try {
    blueprintController.getBlueprint(
      req.params.id,
      blueprint => {
        res.send(blueprint);
      },
      err => {
        throw err;
      }
    );
  } catch (error) {
    res.send(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
