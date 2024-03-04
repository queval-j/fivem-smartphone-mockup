const crypto = require('crypto');

exports.GetBody = (req) => req.body.body;

exports.SendJSON = (req, res, body) => {
    const _id = req.body._id;
    console.log('reply to :', _id, 'with', body);
    res.json({
        _id, body
    })
}

exports.NewUUID = () => crypto.randomUUID();