const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const faker = require('faker');
chai.use(chaiHttp);
const labelJson = require('./label.json');
const { expect } = require('chai');
chai.should();


describe('Add label by id api', () => {
    it.only('Checking Server Error of AddLabelById', (done) => {
        chai
            .request(server)
            .post('/addlabel/:id')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });
    it.only('Gives true When Valid Entry of Token', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .post('/addlabel/:id')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
    it.only('Gives false when token is not verify', (done) => {
        const token = labelJson.label.invalidToken
        chai
            .request(server)
            .post('/addlabel/:id')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
    it.only('If payload of data is validated then it should give true', (done) => {
        const token = labelJson.label.validToken;
        const labelName = {
            labelname: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/addlabel/:id')
            .set({ authorization: token })
            .send(labelName)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    })
    it.only('Should return true, when service layer is giving response', (done) => {
        const token = labelJson.label.validToken;
        const labelName = {
            labelname: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/addlabel/61c4a09b974b4b083aec7d13')
            .set({ authorization: token })
            .send(labelName)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    });
})