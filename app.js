const express = require('express');
const app = express();

const employees = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 28 }
];

app.get('/employees', (req, res) => {
  res.send(employees);
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
