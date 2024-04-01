const NoteController = require('./note').Controller;
const PhoneCallController = require('./phone_call').Controller;
const PhotoController = require('./photo').Controller;
const MessageController = require('./message').Controller;
const ContactController = require('./contact').Controller;
const CloudAccountController = require('./cloud-account').Controller;
const SystemController = require('./system').Controller;

exports.Controller = (app) => {
    NoteController(app);
    PhoneCallController(app);
    PhotoController(app);
    MessageController(app);
    ContactController(app);
    CloudAccountController(app);
    SystemController(app);
};