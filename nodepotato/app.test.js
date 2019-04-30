
'use strict';

const request = require('supertest');
const app = require('./app');

// mock the login so that it always says we are logged in
jest.mock('./login', () => { return jest.fn(() => true)});

const login = require('./login');

// thanks to Nico Tejera at https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
// returns something like "access_token=concertina&username=bobthebuilder"
function serialise(obj){
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
}

describe('Test the people service', () => {
    test('GET /list succeeds', () => {
        return request(app)
	    .get('/list')
	    .expect(200);
    });

    test('GET /list returns JSON', () => {
        return request(app)
	    .get('/list')
	    .expect('Content-type', /json/);
    });

    test('GET /list includes curly', () => {
        return request(app)
	    .get('/list')
	    .expect(/Curly/);
    });

    test('POST /add works', () => {
        // create a randomly named potato type
        let potato_type = 'potato_' + Math.floor(Math.random(1000000000));
	const params = {potato_type: potato_type,
			access_token: 'whatever'};
        // add it to the list
        return request(app)
	    .post('/add')
	    .send(serialise(params)).expect(200);
    });


});
