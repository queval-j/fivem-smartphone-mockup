const { SendJSON, NewUUID, GetBody } = require('../utils');

const MyConversation = [];
const MY_PHONE = '6677862569';

setTimeout(() => {
    const cv = MyConversation[0];
    const msg = cv.addMessage({
        phoneNumber: '9998887777',
        content: 'Hello there!'
    });
    msg.id = '632aec34-c83a-4cbd-a247-8258e96c3c96';
    console.log('Added message:', {
        conversation: cv.toJSON(),
        message: msg
    });
}, 10000);

exports.Controller = (app) => {
    app.post('/api-message-conversation-list', (req, res) => {
        return SendJSON(req, res, { data: MyConversation.map(conversation => conversation.toJSON()) })
    });

    app.post('/api-message-conversation-messages', (req, res) => {
        const { conversationId, page } = req.body;
        const limit = 15;
        const conversation = MyConversation.find(conversation => conversation.conversationId === conversationId);
        if (conversation) {
            return SendJSON(req, res, { data: conversation.messages })
        }
        return SendJSON(req, res, { error: { message: 'error-conversation-not-found' } })
    });

    app.post('/api-message-conversation-new', (req, res) => {
        const reqBody = GetBody(req);
        const { phoneNumber, messageContent } = reqBody;
        let conversation = MyConversation.find(conversation =>
            conversation.people.find(person => person.phoneNumber === phoneNumber)
            && conversation.people.length === 1
        );
        if (conversation) {
            const message = conversation.addMessage({
                phoneNumber: MY_PHONE,
                content: messageContent,
            });
            return SendJSON(req, res, {
                data: {
                    conversation: conversation.toJSON(),
                    message
                }
            });
        }
        conversation = new Conversation(NewUUID());
        conversation.addPerson({
            phoneNumber,
        });
        const message = conversation.addMessage({
            phoneNumber: MY_PHONE,
            content: messageContent,
        });
        MyConversation.push(conversation);
        return SendJSON(req, res, {
            data: {
                conversation: conversation.toJSON(),
                message
            }
        });
    });

    app.post('/api-message-conversation-message-new', (req, res) => {
        const reqBody = GetBody(req);
        const { conversationId, message } = reqBody;
        console.log('Adding message:', reqBody);
        message.phoneNumber = MY_PHONE;
        const conversation = MyConversation.find(conversation => conversation.id === conversationId);
        if (!conversation) {
            const conversation = new Conversation(NewUUID());
            conversation.addMessage(message);
            MyConversation.push(conversation);
            return SendJSON(req, res, {
                data: {
                    conversation: conversation.toJSON(),
                    message
                }
            })
        }
        conversation.addMessage(message);
        return SendJSON(req, res, {
            data: {
                conversation: conversation.toJSON(),
                message
            }
        })
    });

    app.post('/api-message-conversation-message-delete', (req, res) => {
        const reqBody = GetBody(req);
        const { conversationId, message } = reqBody;
        const conversation = MyConversation.find(conversation => conversation.conversationId === conversationId);
        if (conversation) {
            const message = conversation.messages.find(message => message.id === messageId);
            if (message) {
                conversation.removeMessage(message);
                return SendJSON(req, res, { ok: true })
            }
        }
        return SendJSON(req, res, { ok: false })
    });
}

class Conversation {
    constructor(id, title) {
        this.id = id;
        this.title = title || '';
        this.people = [];
        this.messages = [];
        this.isGroup = false;
        this.createdAt = new Date().toISOString();
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title,
            people: this.people,
            messages: this.messages,
            isGroup: this.isGroup,
            createdAt: this.createdAt,
        }
    }

    addMessage(message) {
        const msg = {
            ...message,
            id: NewUUID(),
            createdAt: new Date().toISOString(),
        };
        this.messages.push(msg);
        return msg;
    }

    addPerson(person) {
        this.people.push({
            ...person,
            createdAt: new Date().toISOString(),
        });
    }

    removePerson(person) {
        const index = this.people.indexOf(person);
        if (index !== -1) {
            this.people.splice(index, 1);
        }
    }

    removeMessage(message) {
        const index = this.messages.indexOf(message);
        if (index !== -1) {
            this.messages.splice(index, 1);
        }
    }
}


const initConv = new Conversation(NewUUID());
initConv.id = 'd3c533df-382f-41d9-903e-2ada0d53751d';
initConv.addPerson({
    phoneNumber: '9998887777',
})
MyConversation.push(initConv);