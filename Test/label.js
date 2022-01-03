const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const faker = require('faker');
chai.use(chaiHttp);
const labelJson = require('./label.json');
const { expect } = require('chai');
chai.should();

//Add Label By Id API

describe('Add label by id api', () => {
    it('Checking Server Error of AddLabelById', (done) => {
        chai
            .request(server)
            .post('/addlabel/:id')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });
    it('Gives true When Valid Entry of Token', (done) => {
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
    it('Gives false when token is not verify', (done) => {
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
    it('If payload of data is validated then it should give true', (done) => {
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
    it('Should return true, when service layer is giving response', (done) => {
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
    it('Recieving the response from the model layer, should return true', (done) => {
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
    it('Checking the user with same note, should return true', (done) => {
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
    it('should give true message, When the label belongs to user', (done) => {
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
    it('Adding note into existing label, it should return true', (done) => {
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
    it('Adding note into existing label, it should return true', (done) => {
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

//Get Label API 

describe('get label api', () => {
    it('getlabel test case', (done) => {
        chai
            .request(server)
            .get('/getlabel')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });
    it('test case for valid token', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })
    it('test case for invalid token', (done) => {
        const token = labelJson.label.invalidToken
        chai
            .request(server)
            .get('/getlabel')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    })
    it('it should return true when credential is validated', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })
    it('it should return true when service is added', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })
    it('it should return true when Model layer is added', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })
    it('When Fetching labels it should return true', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })
})

//Get Label By Id API 

describe('get labelById api', () => {
    it('getlabelById test case', (done) => {
        chai
            .request(server)
            .get('/getlabel/:id')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    })
    it('Adding controller layer and checking the response of token in getLabelById, it should retuen true msg while adding ', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel/61cdd42b99bc1829b73b2cd6')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
    it('Adding controller layer and checking the response of Invalid token in getLabelById, it should retuen true msg while adding ', (done) => {
        const token = labelJson.label.invalidToken
        chai
            .request(server)
            .get('/getlabel/:id')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    })
    it('it should return true msg when Credential is added ', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel/61cdd42b99bc1829b73b2cd6')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
    it('it should return true msg when Service layer is added', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel/61cdd42b99bc1829b73b2cd6')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
    it('it should return true msg when Model layer is added', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel/61cdd42b99bc1829b73b2cd6')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
    it('When Fetching labels it should return true', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel/61cdd42b99bc1829b73b2cd6')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
})
describe('Update labelById api', () => {
    it.only('updatelabelById test case', (done) => {
        chai
            .request(server)
            .put('/updatelabel/:id')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    })
    it.only('Adding controller layer and checking the response of token in UpdateLabelById, it should return true msg while adding ', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .put('/updatelabel/:id')
            .set({authorization : token})
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })
    it.only('Adding controller layer and checking the response of Invalid token in UpdateLabelById, it should return true msg while adding ', (done) => {
        const token = labelJson.label.invalidToken
        chai
            .request(server)
            .put('/updatelabel/:id')
            .set({authorization : token})
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    })
})