/*
1. POST /admin/class/{className}/user/{userName}/tests
2. POST /class/{className}/user/{userName}/notes 
*/

const test = require('ava');
const http = require('http');
const app = require('../index.js');
const listen = require('test-listen');
const got = require('got');
const onlyFunc = require('../service/DefaultService.js');

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

// POST /admin/class/{className}/user/{userName}/tests
test('POST /admin/class/{className}/user/{userName}/tests by adminClassClassNameUserUserNameTestsPOST', async (t) => {

    const body = {};
    const userName = 'm.simons';
    const className = 'A1';

    await t.notThrowsAsync(async () => {
        await onlyFunc.adminClassClassNameUserUserNameTestsPOST(body, userName, className);
    });

    const { statusCode } = await t.context.got.post('admin/class/{className}/user/{userName}/tests' );
    console.log(statusCode);
    try {
        t.is(statusCode, 200, 'Successful POST /admin/class/{className}/user/{userName}/tests');
    } catch (error) {
        console.log(error);
        t.fail();
    }
});

// // POST /class/{className}/user/{userName}/notes 
// test('POST /class/{className}/user/{userName}/notes  by classClassNameUserUserNameNotesPOST', async (t) => {

//     const body = '';
//     const userName = 'm.simons';
//     const className = 'A1';

//     await t.notThrowsAsync(async () => {
//         await onlyFunc.adminClassClassNameUserUserNameTestsPOST(body, userName, className);
//     });

//     const { statusCode } = await t.context.got.post('/class/{className}/user/{userName}/notes ' );
//     console.log(statusCode);
//     try {
//         t.is(statusCode, 200, 'Successful POST /class/{className}/user/{userName}/notes ');
//     } catch (error) {
//         console.log(error);
//         t.fail();
//     }
// });

