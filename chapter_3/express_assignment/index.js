const express = require('express'),
    app = express();


app.get("/joke", (req, res) => {
    return res.sendFile(__dirname + "/joke.html")
});

app.use(express.static('public', { maxage: "2d" }));

app.listen(8080, () => {
    console.log("we're up!");
});