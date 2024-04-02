const { SendJSON, NewUUID } = require('../utils');

const WEATHERS = [{
    weather: 'sunny',
    wind: 5.5,
}];

let config = -1;

exports.Controller = (app) => {
    // Phone
    app.post('/api-weather-forecast', (req, res) => {
        SendJSON(req, res, {
            data: WEATHERS[++config % WEATHERS.length],
        })
    })
}