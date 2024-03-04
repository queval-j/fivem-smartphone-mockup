const { SendJSON, NewUUID } = require('../utils');

exports.Controller = (app) => {
    // Phone
    app.post('/phoneMod-CallAccepted', (req, res) => {
        SendJSON(req, res, {ok: true})
    })
    app.post('/phoneMod-CallEnded', (req, res) => {
        SendJSON(req, res, {ok: true})
    })
    app.post('/phoneMod-PhoneClose', (req, res) => {
        SendJSON(req, res, {ok: true})
    })
}