/*
1. POST /admin/class
2. GET /admin/class/{classId}
3. PUT /admin/class/{classId}
4. DELETE /admin/class/{classId}
5. GET /user/{userName}/class/{className}
6. PUT /user/{userName}/class/{className}
*/

const test = require('ava');
const http = require('http');
const app = require('../index.js');
const listen = require('test-listen');
const got = require('got');
const onlyFunc = require('../service/DefaultService.js');

async function validateClassInfo(t, className) {
    const { body } = await t.context.got.get(`user/userName/class/${className}`);
    try {
        t.is(body.className, 'className');
        t.is(body.users, [
            {
              grade: 6.027456183070403,
              user: {
                email: 'email',
                id: 0,
                name: 'name',
                surname: 'surname',
                userName: 'userName',
              },
            },
            {
              grade: 6.027456183070403,
              user: {
                email: 'email',
                id: 0,
                name: 'name',
                surname: 'surname',
                userName: 'userName',
              },
            },
          ]);
        /*t.is(body.class.name, 'name');
        t.is(body.class.id, 0);
        t.is(body.class.userName, 'userName');
        t.is(body.class.email, 'email');
        t.is(body.grade, '0');*/
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

// DELETE /admin/class/{classname}
test('DELETE /admin/class/{className}', async (t) => {
    const className = 'className';
    const { statusCode } = await t.context.got.delete(`admin/class/${className}`);

    try {
        t.is(statusCode, 200, 'Successful DELETE /admin/class/{className}');
    } catch (error) {
        console.log(error);
        t.fail();
    }
});

// deleteClass function
test('DELETE /admin/class/{className} by deleteClass function', async (t) => {
    const className = 'className';

    await t.notThrowsAsync(async () => {
        await onlyFunc.deleteClass(className);
    });
});

// GET /user/{userName}/class/{classname}
test('GET /user/{userName}/class/{classname}', async (t) => {
    const className = 'className';
    const userName = 'userName';

    const { statusCode, body } = await t.context.got.get(`user/${userName}/class/${className}`);

    try {
        t.is(statusCode, 200, 'Successful GET /user/{userName}/class/{classname}');

        t.is(body.className, 'className');
        t.is(body.users, [
            {
              grade: 6.027456183070403,
              user: {
                email: 'email',
                id: 0,
                name: 'name',
                surname: 'surname',
                userName: 'userName',
              },
            },
            {
              grade: 6.027456183070403,
              user: {
                email: 'email',
                id: 0,
                name: 'name',
                surname: 'surname',
                userName: 'userName',
              },
            },
          ]);
        /*t.is(body.class.name, 'name');
        t.is(body.class.id, 0);
        t.is(body.class.userName, 'userName');
        t.is(body.class.email, 'email');
        t.is(body.grade, '0');*/
    } catch (error) {
        console.log(error);
        t.fail();
    }
});

// getClassInfo function
test('GET /user/{userName}/class/{classname} by getClassInfo function', async (t) => {
    const className = 'Physics';
    const userName = 'Mark';

    await t.notThrowsAsync(async () => {
        await onlyFunc.getClassInfoUser(userName, className);
    });
});

// PUT /user/{userName}/class/{classname}
test('PUT /user/{userName}/class/{classname}', async (t) => {
    const updatedClass = {
        className : "className",
        users : [ {
          grade : 6.027456183070403,
          user : {
            surname : "surname",
            name : "name",
            id : 0,
            userName : "userName",
            email : "email"
          }
        }, {
          grade : 6.027456183070403,
          user : {
            surname : "surname",
            name : "name",
            id : 0,
            userName : "userName",
            email : "email"
          }
        } ]
    };

    const { statusCode } = await t.context.got.put(`user/{userName}/class/${updatedClass.className}`, { json: updatedClass });

    try {
        t.is(statusCode, 200, 'Successful PUT /user/{userName}/class/{className}');
    } catch (error) {
        console.log(error);
        t.fail();
    }

    // test that the class is updated
    await validateClassInfo(t, updatedClass.className);
});

// editClassInfo function
test('PUT /user/{userName}/class/{className} by editClassInfo function', async (t) => {
    const updatedClass = {
        className : "className",
        users : [ {
          grade : 6.027456183070403,
          user : {
            surname : "surname",
            name : "name",
            id : 0,
            userName : "userName",
            email : "email"
          }
        }, {
          grade : 6.027456183070403,
          user : {
            surname : "surname",
            name : "name",
            id : 0,
            userName : "userName",
            email : "email"
          }
        } ]
    };

    await t.notThrowsAsync(async () => {
        await onlyFunc.putClassInfoUser(updatedClass, updatedClass.userName, updatedClass.className);
    });

    // test that the class is updated
    await validateClassInfo(t, updatedClass.className);
});

test('Pass test', async (t) => t.pass());

