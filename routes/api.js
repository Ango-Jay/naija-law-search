const express = require("express");
const router = express.Router();
const Laws = require("../model/laws");
const Part_2 = require("../model/part_2");
const Part_3 = require("../model/part_3");

// create post
router.post("/", (req, res) => {
  const { partNum, partTitle, sectNum, sectBody } = req.body;
  const newPost = new Laws({
    partNum,
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
    const allPost = {
      posts: {
        laws: [{ data }]
      },
      status: "",
      size: ""
    };
    res.json(allPost);
  });
});

module.exports = router;
