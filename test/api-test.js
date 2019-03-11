// const chai = require("chai");
// const expect = chai.expect;
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);
describe('Test API node.js', () => {
    /*
    * Test the /GET api/greeting
    */
    describe('get api/greeting', () => {
        it('it should GET the Greeting object', (done) => {
        chai.request(server)
            .get('/api/greeting')
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    chai.expect(res.body).to.deep.equal({greeting: 'Welcome, Convert your number'});
                done();
            });
        });
    });
    /*
    * Test the /POST /api/convert with a correct value
    */
   describe('post api/convert', () => {
        it('it should Convert a normal number', (done) => {
            let numberInDigits = { numberInDigits: 1984 };
        chai.request(server)
            .post('/api/convert')
            .send(numberInDigits)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    console.log("body", res.body);
                    chai.expect(res.body).to.deep.equal({
                        numberInDigits: 1984,
                        numberInWords: 'one thousand nine hundred and eighty-four'
                    });
                done();
            });
        });
        it('it should Convert a decimal number', (done) => {
            let numberInDigits = { numberInDigits: 0.0001 };
        chai.request(server)
            .post('/api/convert')
            .send(numberInDigits)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    console.log("body", res.body);
                    chai.expect(res.body).to.deep.equal({
                        numberInDigits: 0.0001,
                        numberInWords: 'zero point zero zero zero one'
                    });
                done();
            });
        });
        it('it should Convert a negative number', (done) => {
            let numberInDigits = { numberInDigits: -5 };
        chai.request(server)
            .post('/api/convert')
            .send(numberInDigits)
            .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    console.log("body", res.body);
                    chai.expect(res.body).to.deep.equal({
                        numberInDigits: -5,
                        numberInWords: 'negative five'
                    });
                done();
            });
        });
        it('it should respond with an error passing a wrong value', (done) => {
            let numberInDigits = { numberInDigits: 'ehy' };
        chai.request(server)
            .post('/api/convert')
            .send(numberInDigits)
            .end((err, res) => {
                    res.should.have.status(500);
                done();
            });
        });
    });
});