const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const axios = require('axios');

const baseURL = 'http://localhost:8080';
const app = require('../index.js');

test('GET /admin/class/{classId}', async (t) => {
    const classId = '5';

    // make a GET request to the endpoint
    const response = await axios(`${baseURL}/admin/class/${classId}`);
    console.log(response.data);

    // verify the response data
    try {
        t.is(response.status, 200);
        t.is(response.data.users.length, 2);
        t.is(response.data.users[0].user.id, 0);
    } catch (error) {
        console.log(error);
        t.fail();
    }
});