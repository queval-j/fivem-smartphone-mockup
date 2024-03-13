const { SendJSON, GetBody, GetNewID } = require('../utils');

const CloudAccount = [{
    id: GetNewID(),
    playerId: '',
    firstname: '',
    lastname: '', 
    phoneNumber: '6677862569',
    createdAt: '',
}];

exports.Controller = (app) => {
    app.post('/api-cloud-account', (req, res) => {
        // get phone series
        // const reqBody = GetBody(req);
        const cloudAccount = CloudAccount[0];
        const simCard = {
            carrier: 'Tacoma Wireless',
            phoneNumber: cloudAccount.phoneNumber,
            enabled: true,
        }
        SendJSON(req, res, { data: simCard });
    });
}