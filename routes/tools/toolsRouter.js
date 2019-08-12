const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    res.status(200).send({ message: "Engine boosted" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
