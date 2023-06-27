const register = require('./register');
const login = require('./login');
const update = require('./update');
const getUser = require('./getUser');
const getUsers = require('./getUsers');
const logout = require('./logout');

module.exports = {
    register,
    login,
    logout,
    update,
    getUser,
    getUsers,
};