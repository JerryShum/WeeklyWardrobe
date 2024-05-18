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

app.get('/get_previous_weeks', (req, res) => {
    res.send('Hello World');
    console.log('Hello World');
});

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
