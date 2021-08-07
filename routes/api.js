const express = require("express");
const router = express.Router();
const Part_1 = require("../model/part_1");
const Part_2 = require("../model/part_2");
const Part_3 = require("../model/part_3");

// create post
router.post("/", (req, res) => {
  const { partTitle, sectNum, sectBody } = req.body;
  const newPost = new Part_1({
    sectNum,
    sectBody
  });
  newPost.save().then((data) => {
    res.json({ data });
  });
});

// find all posts
router.get("/", (req, res) => {
  Part_1.find().then((data) => {
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
