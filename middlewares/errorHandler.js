// Not Found

const notFound = async (req,res,next) => {
    const error = new Error(`Not Found : ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Error Handler

const errorHandler = async (error,req,res,next) => {
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statuscode);
    res.json({
        message:error?.message,
        stack:error?.stack
    });
}

module.exports = {notFound,errorHandler};