/*
1. POST /admin/class/{className}/user/{userName}/tests
2. POST /class/{className}/user/{userName}/notes
3. POST /class/{className}/user/{userName}/exercises 
4. PUT /admin/user/{userName}/role
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



