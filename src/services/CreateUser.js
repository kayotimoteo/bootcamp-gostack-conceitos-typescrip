"use strict";
//Para Criar usuario: name, email, password
exports.__esModule = true;
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password;
    var user = {
        name: name,
        email: email,
        password: password
    };
    return user;
}
exports["default"] = createUser;
