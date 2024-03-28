exports.homePage = (req, res) => {
    res.render('index');
    return;
};

exports.dealingPost = (req, res) => {
    res.send(req.body); 
    return;
};
