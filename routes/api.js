const express = require("express");
const router = express.Router();
const Laws = require("../model/laws");
const Part_2 = require("../model/part_2");
const Part_3 = require("../model/part_3");

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
  res.setHeader("Content-Type", "application/json");
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
