const request = require('supertest');
const { expect } = require('chai');
const server = require('../server');

describe('GET /', () => {
    after((done) => {
        server.close(done); // Close the server after tests run
    });

    it('should return a 200 status and success message', (done) => {
        request(server)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body.status).to.equal('success');
                done();
            });
    });
});