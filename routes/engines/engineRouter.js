const router = require("express").Router();
const passport = require("passport");
const engineController = require("./engineController");

// @router /api/engines/add
// @desc Add a new Engine
// @access Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    try {
      console.log(req.body);
      let newEngine = {
        name: req.body.name,
        description: req.body.description,
        user: req.user._id,
        blueprint: req.body.blueprint,
        status: req.body.status,
        tools: req.body.tools
      };
      engineController.addEngine(
        newEngine,
        engine => {
          res.send(engine);
        },
        error => {
          throw error;
        }
      );
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
);

//@router /api/engines/all
//@desc   get all engines of the user
//@access private
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    try {
      engineController.getEngines(
        req.user._id,
        engines => {
          console.log(engines);
          res.send(engines);
        },
        error => {
          throw error;
        }
      );
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  }
);

module.exports = router;
