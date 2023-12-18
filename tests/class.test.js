/*
1. POST /admin/class
2. GET /admin/class/{classId}
3. PUT /admin/class/{classId}
4. DELETE /admin/class/{classId}
5. GET /user/{userName}/class/{className}
6. PUT /user/{userName}/class/{className}
*/

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


// POST /class/{className}/user/{userName}/exercises 
test('POST /class/{classname}/user/{username/exercises by createClass function', async (t) => {
    const newClass = {
        classname: 'G class',
        userName: 'm.shadows',
        subjectName: 'Maths',
        exerciseID: '24',
        solutionfile: 'survival.pdf',

    }
    await t.notThrowsAsync(async () => {
        await onlyFunc.createClass(newClass);
    });

});

// POST /class/{className}/user/{userName}/exercises 
test('POST /class/{classname}/user/{username}/exercises', async (t) => {
    const newClass = {
        className: 'G class',
        userName: 'm.shadows',
        subjectName: 'Maths',
        exerciseID: '24',
        solutionfile: 'survival.pdf',
    }

    const { statusCode } = await t.context.got.post(`class/${newClass.className}/user/${newClass.userName}/exercises`, { json: newClass });

    try {
        t.is(statusCode, 200, 'Successful POST /admin/user');
    } catch (error) {
        console.log(error);
        t.fail();
    }

});
