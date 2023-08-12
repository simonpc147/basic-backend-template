export const ErrorMiddleware = (error,req,res,next) => {
    //Set your error handler here

    return res.status(500).json({success: false,error: error.message || 'Unknown error'});
}