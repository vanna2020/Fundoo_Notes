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
    it.only('givenNotes_validToken_shouldCreated', (done) => {
      const token = noteDB.notes.validToken;
      chai
        .request(server)
        .post('/createnotes')
        .set({ authorization: token })
        .send(token)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
    it.only('givenNotes_inValidToken_shouldNotCreated', (done) => {
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
});