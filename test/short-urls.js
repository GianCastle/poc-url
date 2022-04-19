const expect = require('chai').expect;
const request = require('request');

it('GET short-urls - should return 200', function (done) {
  request.get(`http://localhost:3001/short-urls`, (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    expect(body).to.be.a.string
    done();
  });
});


it('GET short-urls/{id} - should return 200', function (done) {
  request.get(`http://localhost:3001/short-urls/8c82f44b-99be-42a3-b963-f202114793d2`, (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    expect(body).to.be.a.string;
    done();
  });
});

it('GET short-urls/{id} - should return null if not found', function (done) {
  request.get(`http://localhost:3001/short-urls/test`, (error, response, body) => {
    expect(response.statusCode).to.equal(200);
    expect(body).to.equal('null');
    done();
  });
});
