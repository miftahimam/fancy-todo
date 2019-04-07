const { isLogin } = require('./authenticate')
const { isAuthorizedUser } = require('./authorize')

module.exports = { isLogin, isAuthorizedUser }