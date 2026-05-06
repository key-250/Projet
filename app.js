const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("The Classroom API is running!");
});

let users = [
  { id: 1, name: "Laptop", status: "Available" ,password:"qwerty"},
  { id: 2, name: "Projector", status: "In Use",password:"qwerty" },
];
app.get("/users", (req, res) => {
  res.json(items);
});
app.post("users", (req, res) => {
  const newItem = { id: items.length + 1, ...req.body };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`Server is moving on http://localhost:${PORT}`);
});
