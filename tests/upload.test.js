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

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

// shutdown server
test.after.always((t) => {
    t.context.server.close();
});


// POST /admin/class/{className}/user/{userName}/tests
test('POST /admin/class/{className}/user/{userName}/tests', async (t) => {
    const { statusCode } = await t.context.got.post('admin/class/{className}/user/{userName}/tests', {
        json: {
            title: "string",
            file: "string",
            id: 0
        }
    })

    t.is(statusCode, 200, 'Expected status code 200 for successful post')
});

// adminClassClassNameUserUserNameTestsPOST function
test('POST /admin/class/{className}/user/{userName}/tests by adminClassClassNameUserUserNameTestsPOST function', async (t) => {
    const className = 'className_dummy';
    const userName = 'userName_dummy';
    const tests = {
        title: "string",
        file: "string",
        id: 0
    }

    await t.notThrowsAsync(async () => {
        await onlyFunc.adminClassClassNameUserUserNameTestsPOST(className, userName, tests);
    });
});

//POST /class/{className}/user/{userName}/notes
test('POST /class/{className}/user/{userName}/notes', async (t) => {
    const { statusCode } = await t.context.got.post('class/{className}/user/{userName}/notes', {
        json: {
            title: "string",
            file: "string"
        }
    })

    t.is(statusCode, 200, 'Expected status code 200 for successful post')
});

// classClassNameUserUserNameNotesPOST function
test('POST /class/{className}/user/{userName}/notes by classClassNameUserUserNameNotesPOST function', async (t) => {
    const className = 'className_dummy';
    const userName = 'userName_dummy';
    const notes = {
        title: "string",
        file: "string"
    };

    await t.notThrowsAsync(async () => {
        await onlyFunc.classClassNameUserUserNameNotesPOST(className, userName, notes);
    });
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

// editUserRole function
test('PUT admin/user/{userName}/role by editUserRole function', async (t) => {
    const updatedUser = {
        nameRole:'Teacher',
        permissions:'Has no permissions',
        userName: 'm.shadows',
    };

    await t.notThrowsAsync(async () => {
        await onlyFunc.editUserRole(updatedUser);
    });
});

// POST /class/{className}/user/{userName}/exercises 
test('POST /class/{classname}/user/{username/exercises by classClassNameUserUserNameExercisesPOST function', async (t) => {
    const newClass = {
        classname: 'G class',
        userName: 'm.shadows',
        subjectName: 'Maths',
        exerciseID: '24',
        solutionfile: 'survival.pdf',

    }
    await t.notThrowsAsync(async () => {
        await onlyFunc.classClassNameUserUserNameExercisesPOST(newClass);
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



