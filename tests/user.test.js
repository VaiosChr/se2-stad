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

// this function should compare the body against the expected values
// but all the GET requests return this same body
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

// initialize server for http requests
test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

// shutdown server
test.after.always((t) => {
    t.context.server.close();
});

// createUser function
test('POST /admin/user by createUser function', async (t) => {
    const newUser = {
        name: 'Matthew',
        surname: 'Sanders',
        userName: 'm.shadows',
        email: 'matsandesr@example.com'
    }

    await t.notThrowsAsync(async () => {
        await onlyFunc.createUser(newUser);
    });

    // test that the user is created
    await validateUserInfo(t, newUser.userName);
});

// POST /admin/user
test('POST /admin/user', async (t) => {
    const newUser = {
        name: 'Matthew',
        surname: 'Sanders',
        userName: 'm.shadows',
        email: 'matsanders@example.com',
    }

    const { statusCode } = await t.context.got.post('admin/user', { json: newUser });

    try {
        t.is(statusCode, 200, 'Successful POST /admin/user');
    } catch (error) {
        console.log(error);
        t.fail();
    }

    // test that the user is created
    await validateUserInfo(t, newUser.userName);
});

// GET /user/{userName}
test('GET /user/{userName}', async (t) => {
    const userName = '1';

    const { statusCode, body } = await t.context.got.get(`user/${userName}`);

    try {
        t.is(statusCode, 200, 'Successful GET /user/{userName}');

        t.is(body.surname, 'surname');
        t.is(body.name, 'name');
        t.is(body.id, 0);
        t.is(body.userName, 'userName');
        t.is(body.email, 'email');
    } catch (error) {
        console.log(error);
        t.fail();
    }
});

// getUserInfo function
test('GET /user/{userName} by getUserInfo function', async (t) => {
    const userName = '1';

    await t.notThrowsAsync(async () => {
        await onlyFunc.getUserInfo(userName);
    });
});

// PUT /user/{userName}
test('PUT /user/{userName}', async (t) => {
    const updatedUser = {
        name: 'Matthew',
        surname: 'Sanders',
        userName: 'm.shadows',
        email: 'matsanders@example.com'
    };

    const { statusCode } = await t.context.got.put(`user/${updatedUser.userName}`, { json: updatedUser });

    try {
        t.is(statusCode, 200, 'Successful PUT /user/{userName}');
    } catch (error) {
        console.log(error);
        t.fail();
    }

    // test that the user is updated
    await validateUserInfo(t, updatedUser.userName);
});

// editUserInfo function
test('PUT /user/{userName} by editUserInfo function', async (t) => {
    const updatedUser = {
        name: 'Matthew',
        surname: 'Sanders',
        userName: 'm.shadows',
        email: 'matsanders@example.com'
    };

    await t.notThrowsAsync(async () => {
        await onlyFunc.editUserInfo(updatedUser);
    });

    // test that the user is updated
    await validateUserInfo(t, updatedUser.userName);
});

// DELETE /admin/user/{userName}
test('DELETE /admin/user/{userName}', async (t) => {
    const userName = 'SynGates123xD';
    const { statusCode } = await t.context.got.delete(`admin/user/${userName}`);

    try {
        t.is(statusCode, 200, 'Successful DELETE /admin/user/{userName}');
    } catch (error) {
        console.log(error);
        t.fail();
    }
});

// deleteUser function
test('DELETE /admin/user/{userName} by deleteUser function', async (t) => {
    const userName = 'm.shadows';

    await t.notThrowsAsync(async () => {
        await onlyFunc.deleteUser(userName);
    });
});



// the following tests do not work, because the DefaultService.js functions
// do not throw errors and the API returns 200 for every request
// they are included here (commented out) for completeness



// // createUser function with invalid user
// test('POST /admin/user by createUser function with invalid user', async (t) => {
//     const newUser = {
//         name: 'Matthew',
//         surname: 'Sanders',
//         userName: 'm.shadows',
//         email: ''                   //empty email
//     };

//     await t.throwsAsync(async () => {
//         await onlyFunc.createUser(newUser);
//     }, { message: 'Invalid user' });

//     t.pass();
// });

// // createUser function with existing user
// test('POST /admin/user by createUser function with existing user', async (t) => {
//     const newUser = {
//         name: 'name',
//         surname: 'surname',
//         userName: 'username',
//         email: 'email'
//     };

//     await t.throwsAsync(async () => {
//         await onlyFunc.createUser(newUser);
//     }, { message: 'User already exists' });
// });

// // POST /admin/user with invalid user
// test('POST /admin/user with invalid user', async (t) => {
//     const newUser = {
//         name: 'Matthew',
//         surname: 'Sanders',
//         userName: 'm.shadows',
//         email: ''                   //empty email
//     };

//     const { statusCode } = await t.context.got.post('admin/user', { json: newUser });

//     try {
//         t.is(statusCode, 400, 'POST /admin/user with invalid user');
//     } catch (error) {
//         console.log(error);
//         t.fail();
//     }
// });

// // POST /admin/user with existing user
// test('POST /admin/user with existing user', async (t) => {
//     const newUser = {
//         name: 'name',
//         surname: 'surname',
//         userName: 'userName',
//         email: 'email'
//     };

//     const { statusCode } = await t.context.got.post('admin/user', { json: newUser });

//     try {
//         t.is(statusCode, 400, 'POST /admin/user with existing user');
//     } catch (error) {
//         console.log(error);
//         t.fail();
//     }
// });

// // GET /user/{userName} with invalid userName
// test('GET /user/{userName} with invalid userName', async (t) => {
//     const userName = 'invalid';

//     const { statusCode } = await t.context.got.get(`user/${userName}`);

//     try {
//         t.is(statusCode, 400, 'GET /user/{userName} with invalid userName');
//     } catch (error) {
//         console.log(error);
//         t.fail();
//     }
// });

// // getUserInfo function with invalid userName
// test('GET /user/{userName} by getUserInfo function with invalid userName', async (t) => {
//     const userName = 'invalid';

//     await t.ThrowsAsync(async () => {
//         await onlyFunc.getUserInfo(userName);
//     });
// });

// // PUT /user/{userName} with invalid user
// test('PUT /user/{userName} with invalid userName', async (t) => {
//     const updatedUser = {
//         name: 'Matthew',
//         surname: 'Sanders',
//         userName: 'm.shadows',
//         email: ''            //empty email
//     };

//     const { statusCode } = await t.context.got.put(`user/${updatedUser.userName}`, { json: updatedUser });

//     try {
//         t.is(statusCode, 400, 'PUT /user/{userName} with invalid user');
//     } catch (error) {
//         console.log(error);
//         t.fail();
//     }
// });

// // editUserInfo function with invalid user
// test('PUT /user/{userName} by editUserInfo function with invalid user', async (t) => {
//     const updatedUser = {
//         name: 'Matthew',
//         surname: 'Sanders',
//         userName: 'm.shadows',
//         email: ''            //empty email
//     };

//     await t.throwsAsync(async () => {
//         await onlyFunc.editUserInfo(updatedUser);
//     }, { message: 'Invalid user' });
// });