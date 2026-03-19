const express = require("express");
const router = express.Router();
const { createUsers,getuser, followUser } = require("../controllers/usercontroller");

router.post("/createusers", createUsers);
router.get("/getusers", getuser);
router.put("/:id/follow", followUser);

module.exports = router;