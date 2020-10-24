const express = require('express');
const app = express();

const port = 8000;
app.get('/', (req, res) => {
return 	res.send('home page');
});

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});