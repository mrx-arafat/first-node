const express = require("express");
var cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());
const port = process.env.PORT || 5000;

const users = [
  { id: 0, name: "aaaa" },
  { id: 1, name: "baaa" },
  { id: 2, name: "cbbb" },
  { id: 3, name: "dick" },
  { id: 4, name: "eaac" },
];

// app.get("/users", (req, res) => {
//   res.send(users);
// });

// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;

//   const user = users[id];

//   res.send(user);
// });

//search

app.post("/users", (req, res) => {
  console.log("hitting the post ", req.body);

  const newUser = req.body;
  newUser.id = user.length;
  users.push(newUser);
  // res.send("inside post ");

  res.json(newUser);
});

app.get("/users", (req, res) => {
  const search = req.query.search;

  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );

    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.listen(port, () => {
  console.log("console");
});
