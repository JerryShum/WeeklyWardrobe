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

const updateStyleObject = require('./objects/User').updateStyleObject;
const newStyleObject = require('./objects/User').users.find(user => user.username === username).styleObject;

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

app.get('/clothing', (req, res) => {
    if (req.query === undefined || req.query.id === undefined) {
        res.status(400).send('Error: id is required');
        return;
    }
    const id = req.query.id;
    const clothing = require('./objects/Clothing').clothings.find(clothing => clothing.id == id);
    res.status(200).send({ 'status': 'success', 'data': clothing });
});

app.get('/user', (req, res) => {
    if (req.query === undefined || req.query.username === undefined) {
        res.status(400).send('Error: username is required');
        return;
    }
    const username = req.query.username;
    const user = require('./objects/User').users.find(user => user.username === username);
    res.status(200).send({ 'status': 'success', 'data': user });
});

app.get('/update_style_object', (req, res) => {
    if (req.query === undefined || req.query.username === undefined || req.query.clothingId === undefined || req.query.rating === undefined) {
        res.status(400).send('Error: username, clothingId, and rating are required');
        return;
    }
    const username = req.query.username;
    const clothingId = req.query.clothingId;
    const rating = req.query.rating;
    const oldStyleObject = require('./objects/User').users.find(user => user.username === username).styleObject;
    const success = updateStyleObject(username, clothingId, rating);
    res.status(200).send({ 'status': 'success', 'data': { 'oldStyleObject': oldStyleObject, 'newStyleObject': newStyleObject, 'success': success } });
});

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
