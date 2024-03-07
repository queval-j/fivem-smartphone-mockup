const NoteController = require('./note').Controller;
const PhoneCallController = require('./phone_call').Controller;
const MessageController = require('./message').Controller;
const ContactController = require('./contact').Controller;

exports.Controller = (app) => {
    NoteController(app);
    PhoneCallController(app);
    MessageController(app);
    ContactController(app);
};