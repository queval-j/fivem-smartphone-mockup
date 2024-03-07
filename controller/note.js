const { SendJSON, NewUUID, GetBody } = require('../utils');

const Notes = [{
    title: 'test',
    content: 'test\n\nHello',
    id: 'a0fa6023-ca81-4150-b416-767b5d6e58d9',
    createdAt: '2024-03-05T17:42:27.427Z',
    updatedAt: '2024-03-05T17:42:27.427Z'
  }];

exports.Controller = (app) => {
    app.post('/api-note-list', (req, res) => {
        SendJSON(req, res, {data: Notes})
    });
    app.post('/api-note-new', (req, res) => {
        const reqBody = GetBody(req);
        reqBody.id = NewUUID();
        reqBody.createdAt = new Date().toISOString();
        reqBody.updatedAt = new Date().toISOString();
        Notes.push(reqBody);
        SendJSON(req, res, {data: reqBody})
    });
    app.post('/api-note-update', (req, res) => {
        const reqBody = GetBody(req);
        const index = Notes.findIndex(note => note.id === reqBody.id);
        if (index !== -1) {
            let note = Notes[index];
            note.updatedAt = new Date().toISOString();
            note.title = reqBody.title || '';
            note.content = reqBody.content || '';
            Notes[index] = note;
            return SendJSON(req, res, {data: note})
        }
        return SendJSON(req, res, { error: { message: 'error-save-note'} })
    });
    app.post('/api-note-delete', (req, res) => {
        const reqBody = GetBody(req);
        const index = Notes.findIndex(note => note.id === reqBody.id);
        let ok = false;
        if (index !== -1) {
            Notes.splice(index, 1);
            ok = true;
        }
        SendJSON(req, res, { ok })
    });
}