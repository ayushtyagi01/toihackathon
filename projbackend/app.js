const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect(
'mongodb://localhost:27017/test'
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log("Database connected congrats!"));
const port = 8000;
app.get('/', (req, res) => {
return 	res.send('home page');
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});