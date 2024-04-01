const { SendJSON, GetBody, GetNewID } = require('../utils');

let photoId = 0;

const Photos = [{
    id: ++photoId,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1526512340740-9217d0159da9?q=80&w=2677&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/250',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/350',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/450',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/550',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/350',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/350',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/350',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/350',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/350',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/350',
    createdAt: "2021-09-28T00:00:00.000Z",
},{
    id: ++photoId,
    type: 'image',
    url: 'https://via.placeholder.com/350',
    createdAt: "2021-09-28T00:00:00.000Z",
}];

exports.Controller = (app) => {
    app.post('/api-photo-list', (req, res) => {
        SendJSON(req, res, { data: Photos })
    });
    app.post('/api-photo-new', (req, res) => {
        const newObj = {
            id: ++photoId,
            type: 'image',
            url: 'https://via.placeholder.com/350',
            createdAt: "2021-09-28T00:00:00.000Z",
        };
        Photos.push(newObj);
        SendJSON(req, res, { data: newObj });
    });
    app.post('/api-photo-delete', (req, res) => {
        const reqBody = GetBody(req);
        const photoId = reqBody.photoId;
        const index = Photos.findIndex(photo => photo.id === photoId);
        let ok = false;
        if (index !== -1) {
            Photos.splice(index, 1);
            ok = true;
        }
        SendJSON(req, res, { ok })
    });
}