const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config({ path: './.env' });

host = '0.0.0.0'
port = 3000

// read host and port from .env if they exist
if (process.env.HOST) {
    host = process.env.HOST;
}
if (process.env.PORT) {
    port = process.env.PORT;
}

console.log(`Server is starting on http://${host}:${port}`);

app.get('/get_worn_clothes', (req, res) => {
    // check if username is provided
    if (req.query === undefined || req.query.username === undefined) {
        res.status(400).send('Error: username is required');
        return;
    }
    const username = req.query.username;
    const getWornClothes = require('./objects/Clothing').getWornClothes;
    const wornClothes = getWornClothes(username);
    res.status(200).send({ 'status': 'success', 'data': wornClothes });
});

app.get('/get_current_week_clothes', (req, res) => {
    // check if username is provided
    if (req.query === undefined || req.query.username === undefined) {
        res.status(400).send('Error: username is required');
        return;
    }
    const username = req.query.username;
    const getCurrentWeekClothes = require('./objects/Clothing').getCurrentWeekClothes;
    const currentWeekClothes = getCurrentWeekClothes(username);
    res.status(200).send({ 'status': 'success', 'data': currentWeekClothes });
});

app.get('/get_next_week_clothes', (req, res) => {
    // check if username is provided
    if (req.query === undefined || req.query.username === undefined) {
        res.status(400).send('Error: username is required');
        return;
    }
    const username = req.query.username;
    const getNextWeekClothes = require('./objects/Clothing').getNextWeekClothes;
    const nextWeekClothes = getNextWeekClothes(username);
    res.status(200).send({ 'status': 'success', 'data': nextWeekClothes });
});

app.get('/reevaluate_next_week_clothes', (req, res) => {
    if (req.query === undefined || req.query.username === undefined || req.query.threshold === undefined) {
        res.status(400).send('Error: username and threshold are required..: ' + req.query.username + ' ' + req.query.threshold);
        return;
    }
    const username = req.query.username;
    const threshold = req.query.threshold;
    const reevaluateNextWeekClothes = require('./objects/Clothing').reevaluateNextWeekClothes;
    const nextWeekClothes = reevaluateNextWeekClothes(username, threshold);
    res.status(200).send({ 'status': 'success', 'data': nextWeekClothes });
});

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
