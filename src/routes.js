"use strict";
exports.__esModule = true;
var CreateUser_1 = require("./services/CreateUser");
// string, number, boolean, object, Arrays
// intefaces
// vetores
function helloWorld(request, response) {
    var user = CreateUser_1["default"]({
        email: 'timoteokayo@gmail.com',
        password: '12345',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'Javascript', experience: 100 },
        ]
    });
    console.log(user.email);
    return response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
