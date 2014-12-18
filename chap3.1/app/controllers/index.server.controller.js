exports.render = function(req, res){
    //res.send('Yay ! my express app works.');

    res.render('index', {
        title: 'testing'
    });
};
