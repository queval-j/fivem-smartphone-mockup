const { SendJSON, GetNewID, GetBody } = require('../utils');

const MyContacts = [];

exports.Controller = (app) => {
    app.post('/api-contact-list', (req, res) => {
        return SendJSON(req, res, { data: MyContacts })
    });

    app.post('/api-contact-new', (req, res) => {
        const reqBody = GetBody(req);
        const { phoneNumber, name } = reqBody;
        const contact = MyContacts.find(contact => contact.phoneNumber === phoneNumber);
        if (contact) {
            return SendJSON(req, res, { data: contact })
        }
        const newContact = {
            id: GetNewID(),
            phoneNumber,
            name,
        };
        MyContacts.push(newContact);
        return SendJSON(req, res, { data: newContact })
    });

    app.post('/api-contact-update', (req, res) => {
        const reqBody = GetBody(req);
        const { id, phoneNumber, name } = reqBody;
        const contact = MyContacts.find(contact => contact.id === id);
        if (!contact) {
            return SendJSON(req, res, { error: 'Contact not found' })
        }
        contact.phoneNumber = phoneNumber;
        contact.name = name;
        return SendJSON(req, res, { data: contact })
    });

    app.post('/api-contact-delete', (req, res) => {
        const reqBody = GetBody(req);
        const { id } = reqBody;
        const contactIndex = MyContacts.findIndex(contact => contact.id === id);
        if (contactIndex === -1) {
            return SendJSON(req, res, { error: 'Contact not found' })
        }
        MyContacts.splice(contactIndex, 1);
        return SendJSON(req, res, { data: true })
    });
}