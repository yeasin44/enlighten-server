const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.Port || 5000;

app.use(cors());

const categories = require("./data/Categories.json");
const topics = require("./data/Topics.json");

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/topics-categories", (req, res) => {
  res.send(categories);
});

app.get("/topics", (req, res) => {
  res.send(topics);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryTopics = topics.filter((t) => t.category_id === id);
  res.send(categoryTopics);
});

app.get("/topics/:id", (req, res) => {
  const id = req.params.id;
  const selectedTopics = topics.find((t) => t._id === id);
  res.send(selectedTopics);
});

app.listen(port, () => {
  console.log(`Api is running on port ${port}`);
});
