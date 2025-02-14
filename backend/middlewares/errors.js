const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    // err.message = err.message || 'internal server error';
    if (process.env.NODE_ENV === 'DEVELOPMENT') {
        res.status(err.statusCode).json({
            success: false,
            error: err,
            errMessage: err.message,
            stack: err.stack
        })
    }

    res.status(err.statusCode).json({
        success: false,
        error: err.stack
    })
}
if(process.env.NODE_ENV === 'PRODUCTION') {
    let error = {...err}

    error.message = err.message

    //wrong mongoooes object id error
    if(err.name === 'CastError') {
        const message = `resource not found. Invalid: ${err.path}`
        error = new ErrorHandler(message, 400)
    }

    //HANDLING mongoose VALIDATION ERROR
    if(err.name === 'ValidationError') {
        const message = object.values(err.errors).map(value => value.message)
        error = new ErrorHandler(message, 400)
    }

    //handling the mongoose duplicate key errors
    if(err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        error = new ErrorHandler(message, 400)

    }

    //handling wrong jwt error
    if(err.name === 'JsonWebTokenError') {
        const message = "nJSON Web Token is invalid, TRy again!!!"
        error = new ErrorHandler(message, 400)
    }

     //handling expired jwt error
     if(err.name === 'TokenExpiredError') {
        const message = "nJSON Web Token is expired, Try again!!!"
        error = new ErrorHandler(message, 400)
    }


    res.status(err.statusCode).json({
        success: false,
        error: error.message || 'Internal Server Error'
    })
}

