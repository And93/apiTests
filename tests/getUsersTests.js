const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../utils/sendRequest');
const headersHandler = require('../utils/headersHandler');
const getComment = require('../data/getUsers');
const env = require('../common/const');

describe('Get some information about users', () => {

    getComment.forEach(data => {
        let response;

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
        });

        context('Verify an http status code', () => {
            it('Validation: status code of the obtained response is 200 OK', () => {
                expect(response.statusCode).to.eql(200);
            });
        });

        context('Verify an http response header', () => {
            it('Validation: the content-type header exists in the obtained response', () => {
                expect(headersHandler.getHeaders(response).includes('content-type')).to.be.true;
            });

            it('Validation: the value of the content-type header is application/json; charset=utf-8', () => {
                expect(headersHandler.getContentHeader(response, 'content-type')).to.eql('application/json; charset=utf-8');
            });
        });

        context('Verify an http response body', () => {
            it('Validation: the content of the response body is the array of 10 users', () => {
                expect(response.body.length).to.eql(10)
            });
        });
    });
});
