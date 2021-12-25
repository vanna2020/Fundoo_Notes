const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const faker = require('faker');
chai.use(chaiHttp);
const noteDB = require('./notes.json');
const { expect } = require('chai');
const { string } = require('joi');
chai.should();

describe('create notes api', () => {
    it('givenNotes_InValidToken', (done) => {
        const token = noteDB.notes.invalidToken;
        chai
            .request(server)
            .post('/createnotes')
            .set({ authorization: token })
            .send()
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
    it('givenNotes_validToken_is Authentic Request', (done) => {
        const token = noteDB.notes.validToken;
        const createNotes = {
            title: faker.lorem.word(),
            description: noteDB.notes.description
        };
        chai
            .request(server)
            .post('/createnotes')
            .set({ authorization: token })
            .send(createNotes)
            .end((err, res) => {
                if (err) {
                    return res.status(500)
                }
                res.should.have.status(400);
                done();
            });
    });
    it('givenNotes_inValidToken_is not Authentic', (done) => {
        const token = noteDB.notes.invalidToken;
        chai
            .request(server)
            .post('/createnotes')
            .set({ authorization: token })
            .send(token)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
    it('givenNotes_ValidToken_shouldCreated', (done) => {
        const token = noteDB.notes.validToken;
        const createNotes = {
            title: noteDB.notes.title,
            description: faker.lorem.word()
        };
        chai
            .request(server)
            .post('/createnotes')
            .set({ authorization: token })
            .send(createNotes)
            .end((err, res) => {
                if (err) {
                    return res.status(500)
                }
                res.should.have.status(400);
                done();
            });
    });
    it('givenNotes_ValidToken_shouldNotCreated with Title and Description', (done) => {
        const token = noteDB.notes.validToken;
        const createNotes = {
            title: faker.lorem.word(),
            description: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/createnotes')
            .set({ authorization: token })
            .send(createNotes)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
    it('givenNotes_InValidToken_shouldNotCreated with Title and Description', (done) => {
        const token = noteDB.notes.invalidToken;
        const createNotes = {
            title: faker.lorem.word(),
            description: faker.lorem.word()
        };
        chai
            .request(server)
            .post('/createnotes')
            .set({ authorization: token })
            .send(createNotes)
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
    it('Should return true from CreateNoteApi Service Layer , return appropriate response', (done) => {
        const token = noteDB.notes.validToken;
        const createNotes = {
            title: faker.lorem.word(),
            description: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/createnotes')
            .set({ authorization: token })
            .send(createNotes)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
    it('Should return true from CreateNoteApi Model Layer , return appropriate response', (done) => {
        const token = noteDB.notes.validToken;
        const createNotes = {
            title: faker.lorem.word(),
            description: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/createnotes')
            .set({ authorization: token })
            .send(createNotes)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
    it('Should return true from Model Layer noteiscreated, return appropriate response', (done) => {
        const token = noteDB.notes.validToken;
        const createNotes = {
            title: faker.lorem.word(),
            description: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/createnotes')
            .set({ authorization: token })
            .send(createNotes)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
    it('Should return true from Model Layer .save is saving data, return appropriate response', (done) => {
        const token = noteDB.notes.validToken;
        const createNotes = {
            title: faker.lorem.word(),
            description: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/createnotes')
            .set({ authorization: token })
            .send(createNotes)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
});
describe('get note api', () => {
    it.only('gettinganotesApplyingInValidToken', (done) => {
        chai
            .request(server)
            .get('/getnotes')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });
    it.only('gettinganotes_validToken_is Authentic Request', (done) => {
        const token = noteDB.notes.validToken;
        chai
            .request(server)
            .get('/getnotes')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
    it.only('gettinganotes_inValidToken_is not Authentic', (done) => {
        const token = noteDB.notes.invalidToken;
        chai
            .request(server)
            .get('/getnotes')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
    it.only('gettinganotes_validToken_idValidation Verified or not', (done) => {
        const token = noteDB.notes.validToken;
        chai
            .request(server)
            .get('/getnotes')
            .set({ authorization: token })
            .end((err, res) => {
                if (err) {
                    res.should.have.status(400);
                }
                res.should.have.status(201);
                done();
            });
    });
    it.only('gettinganotes_validToken_Checking Service Response', (done) => {
        const token = noteDB.notes.validToken;
        chai
            .request(server)
            .get('/getnotes')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
    it.only('gettinganotes_validToken_Checking from Model Layer Response', (done) => {
        const token = noteDB.notes.validToken;
        chai
            .request(server)
            .get('/getnotes')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
});

