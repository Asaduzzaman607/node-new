const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ["asad", "moin", "sohana", "shushmita", "sajeeb", "sabana"];

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

//post
app.post("/addUser", (req, res) => {
  //save to database
 const user= req.body;
 user.id=55;
 res.send(user)
});

app.listen(3000, () => console.log("listening to port 3000"));
