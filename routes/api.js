const express = require("express");
const router = express.Router();
const Section = require("../model/section");

// create post
router.post("/", (req, res) => {
  const { part, section, body, subsection } = req.body;
  const newPost = new Section({ part, section, body, subsection });
  newPost.save().then((data) => {
    res.json({ data });
  });
});

// find all posts
router.get("/", (req, res) => {
  Section.find().then((data) => {
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
