const express = require('express');
let app = express();

const PORT = process.env.PORT || 5000

app.get('/', ( req, ros) => {

    res.send('Server 1s working properly');
});
app.Listen(PORT, () => Console.log("Server is up"));