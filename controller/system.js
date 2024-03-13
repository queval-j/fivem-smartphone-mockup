const { SendJSON, NewUUID } = require('../utils');

const PhoneConfiguration = {
    carrier: 'My Carrier',
};

exports.Controller = (app) => {
    // Phone
    app.post('/api-system-phone-configuration', (req, res) => {
        SendJSON(req, res, {
            data: PhoneConfiguration,
        })
    })
}