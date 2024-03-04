const { SendJSON, NewUUID, GetBody } = require('../utils');

const Notes = [];

exports.Controller = (app) => {
    app.post('/note-mod-list', (req, res) => {
        SendJSON(req, res, {data: Notes})
    });
    app.post('/note-mod-add', (req, res) => {
        const reqBody = GetBody(req);
        reqBody.id = NewUUID();
        reqBody.createdAt = new Date().toISOString();
        reqBody.updatedAt = new Date().toISOString();
        Notes.push(reqBody);
        SendJSON(req, res, {data: reqBody})
    });
    app.post('/note-mod-update', (req, res) => {
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
    app.post('/note-mod-delete', (req, res) => {
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