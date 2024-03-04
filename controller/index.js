const NoteController = require('./note').Controller;
const PhoneCallController = require('./phone_call').Controller;

exports.Controller = (app) => {
    NoteController(app);
    PhoneCallController(app);
};