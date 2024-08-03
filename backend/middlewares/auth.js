//check if user is authenticated or nor
const jwt = require('jsonwebtoken')
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");

const User = require('../models/user')

exports.isAuthenticatedUser = catchAsyncErrors( async(req, res, next) => {
    const { token } = req.cookies

   if(!token){
    return next(new ErrorHandler('Login First to access this resource.', 401))
   }

   const decoded = jwt.verify(token, process.env.JWT_SECRET)
   
   req.user = await User.findById(decoded.id)

   next()

})

//handling users roles
exports.authorizeRoles = (...roles) => {
    return(req, res, next)  => {

        if (!roles.includes(req.user.role)) {
            return next (   
            new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`,
            403))
        }
        next()
    }
    
}


