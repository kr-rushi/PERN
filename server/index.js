const express = require("express");
const app = express();
const cors = require("cors");
const pool = reuire("./db");
//middleware
app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo(description) VALUES($1)",
      [description]
    );
    res.json(newTodo);
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
