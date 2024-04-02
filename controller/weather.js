const { SendJSON, NewUUID } = require('../utils');

const WEATHERS = [
    'CLEAR',
    'EXTRASUNNY',
    'CLOUDS',
    'OVERCAST',
    'RAIN',
    'CLEARING',
    'THUNDER',
    'SMOG',
    'FOGGY',
    'XMAS',
    'SNOW',
    'SNOWLIGHT',
    'BLIZZARD',
    'HALLOWEEN',
    'NEUTRAL',
].map((weather) => ({
    weather,
    wind: Math.random() * 100,
    temperature: Math.ceil(Math.random() * 100) % 44,
}));

let config = -1;

exports.Controller = (app) => {
    // Phone
    app.post('/api-weather-forecast', (req, res) => {
        SendJSON(req, res, {
            data: WEATHERS[++config % WEATHERS.length],
        })
    })
}