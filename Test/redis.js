const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const faker = require('faker');
chai.use(chaiHttp);
const redis = require("./redis.json");
chai.should();

describe("Implementing redis for get note by Id", () => {
    it("givenPoperDetailsShouldGetNote", (done) => {
        const token = redis.redis.validToken;
        chai
            .request(server)
            .get("/getnotes/61d88aaaaab377829df163cc")
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
    });
    it("Should Not GetNote by id when the givenDetails is not appropriate", (done) => {
        const token = redis.redis.invalidToken;
        chai
            .request(server)
            .get("/getnotes/61d88aaaaab377829df163cc")
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(400);
                done();
            });
    });
    it("Get notes by ID when redis server is run", (done) => {
        const token = redis.redis.validToken;
        chai
            .request(server)
            .get("/getnotes/61d88aaaaab377829df163cc")
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property("success").eql(true);
                done();
            });
    });
    it("Should Getnote by id when given Details is appropriate", (done) => {
        const token = redis.redis.validToken;
        chai
            .request(server)
            .get("/getnotes/61d88aaaaab377829df163cc")
            .set({ authorization: token })
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.have.property("success").eql(true);
                done();
            });
    });
});