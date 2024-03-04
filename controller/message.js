const { SendJSON, NewUUID } = require('../utils');

exports.Controller = (app) => {
    app.post('/message-mod-list', (req, res) => {
        SendJSON(req, res, {ok: true})
    })
}