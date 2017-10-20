const steam   = require('steam-login');

module.exports = app => {

    app.use(require('express-session')({ resave: false, saveUninitialized: false, secret: 'a secret' }));

    app.use(steam.middleware({
        realm: 'http://localhost:3000/',
        verify: 'http://localhost:3000/verify',
        apiKey: process.argv[2],
        'Access-Control-Allow-Origin': '*'}
    ));

    app.get('/steam', function(req, res) {
        res.send(req.user === null ? 'not logged in' : 'hello ' + req.user.username).end();
    });

    app.get('/steam/authenticate', steam.authenticate(), function(req, res) {
        res.setHeaders();
        res.redirect('/');
    });

    app.get('/steam/verify', steam.verify(), function(req, res) {
        res.send(req.user).end();
    });

    app.get('/steam/logout', steam.enforceLogin('/'), function(req, res) {
        req.logout();
        res.redirect('/');
    });

};


