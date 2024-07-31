const User = require('../models/user')

const ErrorHandler = require('../utils/errorHandler')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')
const sendToken = require('../utils/jwtToken')


//REGISTER A USER => /api/v1/register

exports.registerUser = catchAsyncErrors(async ( req, res, next) => {
    
    const {name, email, password }= req.body;

    const user= await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'bb2ac0e6-eb00-4af0-b86c-ab833804927d',
            url: 'https://www.freepik.com/free-ai-image/androgynous-avatar-non-binary-queer-person_133543503.htm?log-in=google#query=avatar&position=4&from_view=keyword&track=ais_hybrid&uuid=bb2ac0e6-eb00-4af0-b86c-ab833804927d'

        }
    })

   sendToken(user, 200, res)


   
})


//login user
exports.loginUser = catchAsyncErrors(async(req, res, next) => {
    const {email,password } =req.body;

    //check if email and password has been entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email and password', 400))
    }
    //finding user in database
    const user = await User.findOne({email}).select('+password')

    if(!user) {
        return next(new ErrorHandler('Invalid email or password',401 ));
    }
    //check if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler('invalid email or password', 401))
    }

       sendToken(user, 200, res)

})