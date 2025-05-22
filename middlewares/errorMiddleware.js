const {errors} = require ('celebrate')

const celebrateErrorsHandler = errors();

const generateErrors = (error, req, res)=> {
    if (error.joi){
        res.status(400).json({
            message:'Validation Error',
            datails: error.joi.details.map(detail => detail.message),
        })
    }
    console.error(error.stack);
    res.status(500).json({message: 'Internal Server Error'})
}

module.exports = {
    generateErrors,
    celebrateErrorsHandler
}