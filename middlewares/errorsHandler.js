function errorsHandler (err, req, res, next){
    res.status(err.code ?? 500);
    res.json({
        status : "kO",
        error : err.message,
    });
};
module.exports= errorsHandler;