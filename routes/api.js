const express = require("express");
const router = express.Router();
const Laws = require("../model/laws");

// create post
router.post("/", (req, res) => {
  const { partNumber, partTitle, sectNum, sectBody } = req.body;
  const newPost = new Laws({
    partNumber,
    partTitle,
    sectNum,
    sectBody
  });
  newPost.save().then((data) => {
    res.json({ data });
  });
});

// find all posts
router.get("/", (req, res) => {
  Laws.find().then((data) => {
    const status = data ? "success" : "fail";
    const allPost = {
      data,
      status: status,
      size: data.length
    };
    res.json(allPost);
  });
});

module.exports = router;
