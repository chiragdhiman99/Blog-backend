const express = require("express");
const router = express.Router();
const { createPost , getpost , getpostbyid, likePost,commentpost,deletecomment,getUserPosts} = require("../controllers/postcontroller");

router.post("/createpost", createPost);
router.get("/getpost", getpost);
router.get("/getpost/:id", getpostbyid);
router.put("/:id/like", likePost);
router.post("/:id/comment", commentpost);
router.delete("/:id/comment/:commentId", deletecomment);
router.get("/user/:name", getUserPosts)

module.exports = router;