const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

let discussions = [];

// Endpoint to get discussions
app.get("/discussions", (req, res) => {
    res.json(discussions);
});

// Endpoint to save discussions
app.post("/discussions", (req, res) => {
    discussions = req.body;
    res.status(200).end();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
