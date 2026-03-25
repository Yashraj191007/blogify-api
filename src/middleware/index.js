const requestLogger= require('./requestLogger');
const errorHandler= require('./errorHandler');
const protect = require('./auth.middleware');

module.exports={
    requestLogger,
    errorHandler,
    protect
}