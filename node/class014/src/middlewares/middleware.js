exports.middlewareGlobal = (req, res, next) => {
    next();
};

exports.otherMiddleware = (req, res, next) => {
    next();
};