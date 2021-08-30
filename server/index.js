const express = require('express');
const cors = require('cors');
const app = express();
const SERVER_PORT = 4000;

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
    let friends = ['John', 'Logan', 'Braydon', 'Chris'];
    res.status(200).send(friends);
})

app.get("/weather/:tempurature", (req, res) => {
    const phrase = `<h3>It was ${req.params.tempurature} today</h3>`;
    res.status(200).send(phrase);
});

app.listen(SERVER_PORT, () =>
  console.log(`Server up and listening on port ${SERVER_PORT}`)
);