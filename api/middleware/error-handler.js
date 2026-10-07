function errorHandler(err, req, res, next){

    if(err.status == 401 || err.status == 400){
        res.status(err.status).redirect("../../login.html");
    }


    res.status(err.status || 500).json({
        message: err.message
    })
}

module.exports = errorHandler