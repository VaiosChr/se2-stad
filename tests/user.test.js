/*
1. POST /admin/user
2. GET /user/{userName}
3. PUT /user/{userName}
4. DELETE /admin/user/{userName}
*/

const test = require('ava');
const http = require('http');
const app = require('../index.js');
const listen = require('test-listen');
const got = require('got');
const onlyFunc = require('../service/DefaultService.js');

test('Pass test', async (t) => t.pass());

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

// shutdown server
test.after.always((t) => {
    t.context.server.close();
});

async function validateUserInfo(t, userName) {
    const { body } = await t.context.got.get(`user/${userName}`);
    try {
        t.is(body.surname, 'surname');
        t.is(body.name, 'name');
        t.is(body.id, 0);
        t.is(body.userName, 'userName');
        t.is(body.email, 'email');
    } catch (error) {
        console.log(error);
        t.fail();
    }
}

test('PUT admin/user/{userName}/role', async (t) => {
    const updatedUser = {
        nameRole:'Teacher',
        permissions:'Has no permissions',
        userName: 'm.shadows',
    };

    const { statusCode } = await t.context.got.put(`user/${updatedUser.userName}`, { json: updatedUser });

    try {
        t.is(statusCode, 200, 'Successful PUT admin/user/{userName}/role');
    } catch (error) {
        console.log(error);
        t.fail();
    }
            

    // test that the user is updated
    await validateUserInfo(t, updatedUser.userName);
});

// editUserInfo function
test('PUT admin/user/{userName}/role by editUserInfo function', async (t) => {
    const updatedUser = {
        nameRole:'Teacher',
        permissions:'Has no permissions',
        userName: 'm.shadows',
    };

    await t.notThrowsAsync(async () => {
        await onlyFunc.editUserInfo(updatedUser);
    });
});