const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const faker = require('faker');
chai.use(chaiHttp);
const labelJson = require('./label.json');
const { expect } = require('chai');
chai.should();

//Add Label By Id API

describe('Add label by id api ', () => {
    it('AddLabelById_by_checking_server', (done) => {
        chai
            .request(server)
            .post('/addlabel/:id')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    });
    it('Gives true when token is verify', (done) => {
        const token = labelJson.label.validToken;
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/addlabel/61d90480bbbbfa1568931dd0')
            .set({ authorization: token })
            .send(labelName)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
    it('Should Give false when token is not verify', (done) => {
        const token = labelJson.label.invalidToken;
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
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/addlabel/61d90480bbbbfa1568931dd0')
            .set({ authorization: token })
            .send(labelName)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    });
    it('When service layer is giving response, should return true', (done) => {
        const token = labelJson.label.validToken;
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/addlabel/61d90480bbbbfa1568931dd0')
            .set({ authorization: token })
            .send(labelName)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    });
    it('When model layer is giving response, should return true', (done) => {
        const token = labelJson.label.validToken;
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/addlabel/61d90480bbbbfa1568931dd0')
            .set({ authorization: token })
            .send(labelName)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    });
    it('When note is belong to same user, it should return true', (done) => {
        const token = labelJson.label.validToken;
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/addlabel/61d90480bbbbfa1568931dd0')
            .set({ authorization: token })
            .send(labelName)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    });
    it('When the label belong to user, it should give true', (done) => {
        const token = labelJson.label.validToken;
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/addlabel/61d90480bbbbfa1568931dd0')
            .set({ authorization: token })
            .send(labelName)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    });
    it('When note added into existing label, it should give true', (done) => {
        const token = labelJson.label.validToken;
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/addlabel/61d90480bbbbfa1568931dd0')
            .set({ authorization: token })
            .send(labelName)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    });
    it('When label is created, it should give true', (done) => {
        const token = labelJson.label.validToken;
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .post('/addlabel/61d90480bbbbfa1568931dd0')
            .set({ authorization: token })
            .send(labelName)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            })
    });
});

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
    it('Adding controller layer and checking the response of token in getLabelById, it should return true msg while adding ', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .get('/getlabel/61d90480bbbbfa1568931dd0')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
    it('Adding controller layer and checking the response for Invalid token in getLabelById, it should return true msg while adding ', (done) => {
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
            .get('/getlabel/61d90480bbbbfa1568931dd0')
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
            .get('/getlabel/61d029a90e685652a8fab41d')
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
            .get('/getlabel/61d90480bbbbfa1568931dd0')
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
            .get('/getlabel/61d90480bbbbfa1568931dd0')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
})

//Update Label By Id API

describe('Update labelById api', () => {
    it('updatelabelById test case', (done) => {
        chai
            .request(server)
            .put('/updatelabel/:id')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    })
    it('Adding controller layer and checking the response of token in UpdateLabelById, it should return true msg while adding ', (done) => {
        const token = labelJson.label.validToken
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .put('/updatelabel/61d9cdd21a01502ac1dd4a15')
            .set({ authorization: token })
            .send({ labelName: 'Vandana' })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
    it('Adding controller layer and checking the response for Invalid token in UpdateLabelById, it should return true msg while adding ', (done) => {
        const token = labelJson.label.invalidToken
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .put('/updatelabel/61d9cdd21a01502ac1dd4a15')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    })
    it('it should return true msg when Credential is added', (done) => {
        const token = labelJson.label.validToken
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .put('/updatelabel/61d9cdd21a01502ac1dd4a15')
            .set({ authorization: token })
            .send({ labelName: 'Vandana' })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
    it('it should return true msg when Service layer is added', (done) => {
        const token = labelJson.label.validToken
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .put('/updatelabel/61d9cdd21a01502ac1dd4a15')
            .set({ authorization: token })
            .send({ labelName: 'Vandana' })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
    it('it should return true msg when Model layer is added', (done) => {
        const token = labelJson.label.validToken
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .put('/updatelabel/61d9cdd21a01502ac1dd4a15')
            .set({ authorization: token })
            .send({ labelName: 'Vandana' })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
    it('When Fetching labels it should return true', (done) => {
        const token = labelJson.label.validToken
        const labelName = {
            labelName: faker.lorem.word()
        }
        chai
            .request(server)
            .put('/updatelabel/61d9cdd21a01502ac1dd4a15')
            .set({ authorization: token })
            .send({ labelName: 'Vandana' })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
})

//Delete Label By Id API

describe('deletelabelById api', () => {
    it('deletelabelById test case', (done) => {
        chai
            .request(server)
            .delete('/deletelabel/:id')
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
    })
    it('Adding controller layer and checking the response of token in DeleteLabelById, it should return true msg while adding  ', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .delete('/deletelabel/:id')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
    it('Adding controller layer and checking the response for Invalid token in DeleteLabelById, it should return true msg while adding  ', (done) => {
        const token = labelJson.label.invalidToken
        chai
            .request(server)
            .delete('/deletelabel/:id')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    })
    it('it should return true msg when true params is passes', (done) => {
        const token = labelJson.label.validToken
        chai
            .request(server)
            .delete('/deletelabel/61d3d068b4cb2d3e7a27dbdc')
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
            .delete('/deletelabel/61d3d068b4cb2d3e7a27dbdc')
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
            .delete('/deletelabel/61d3d068b4cb2d3e7a27dbdc')
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
            .delete('/deletelabel/61d3d068b4cb2d3e7a27dbdc')
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    })
})