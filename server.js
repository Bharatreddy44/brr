const express = require('express');
let app = express();

const PORT = process.env.PORT || 5000

app.get('/', ( req, res) => {

    res.send('Server 1s working properly');
});
app.listen(PORT, () => console.log("Server is up"));