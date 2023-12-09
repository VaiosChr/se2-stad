const hhtp = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const baseURL = 'se2-stad-production.up.railway.app';
const app = require('../index.js');

test('POST /admin/class creates a class', async (t) => {
    const url = `${baseURL}/admin/class`;
    
    const requestBody = {
        className: 'ExampleClass',
        users: [
            {
                user: {
                    userName: 'exampleUser',
                    name: 'John',
                    surname: 'Doe',
                    email: 'john.doe@example.com',
                    id: 1,
                },
                grade: 90,
            },
        ],
    };

    try {
        const response = await axios.post(url, requestBody, { headers });

        t.is(response.status, 200);
        // Add more assertions based on your API response format
        t.true(response.data.success);
    } catch (error) {
        console.error(error.message);
        t.fail();
    }
});
