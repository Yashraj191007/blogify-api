const requestLogger = (req, res, next) => {
    console.log(`Request recived: ${req.method} ${res.orignalUrl}`)
    next();
}
module.exports = requestLogger;