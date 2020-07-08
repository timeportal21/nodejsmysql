const router = require("express").Router();

router.get("/register", (req, res, next) => {
    res.send({ message: "it worked lwal" });
});

module.exports = router;
