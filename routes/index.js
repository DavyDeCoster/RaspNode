var express = require('express');
var router = express.Router();
var passport = require('passport');
var Account = require('../data/models/account');
var comm = require('../app/comm');

router.get('/', function (req, res) {
    if(req.session['user']!= null)
    {
        return res.render('index', { user : req.session['user'], pagetitle : "RoboDog | Home" });
    }
    res.render('index', {pagetitle : "RoboDog | Home" });

});

//USER SYSTEM ROUTES

router.get('/register', function(req, res) {
    if(req.session['user']!=null)
    {
        return res.redirect('/');
    }
    res.render('register', {pagetitle : "RoboDog | Registration" });
});

router.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username, admin:false }), req.body.password, function(err) {
        if (err) {
            return res.render("register", {info: "Sorry. That username already exists. Try again."});
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user, pagetitle : "RoboDog | Login" });
});

router.post('/login', function(req,res,next){
    passport.authenticate('local', function(err, user){
        if (err) {
            return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        if (! user) {
            return res.render('login',{info:"Login not found"});
        }
        req.session['user']=user;
        return res.redirect('/');
    })(req, res, next);
});

router.get('/logout', function(req, res) {
    req.logout();
    req.session['user']=null;
    res.redirect('/');
});

//CONTROL CENTER ROUTES

router.get('/control', function(req,res){
    if(req.session['user']!= null)
    {
        return res.render('control', { user: req.session['user'], pagetitle : "RoboDog | Control Center" });
    }
    res.redirect('/login');
});

router.get('/control/forward',function(req,res){
    comm.forward();
    res.send('ok');
});

router.get('/control/left',function(req,res){
    comm.left();
    res.send('ok');
});

router.get('/control/right',function(req,res){
    comm.right();
    res.send('ok');
});

router.get('/control/stop',function(req,res){
    comm.stop();
    res.send('ok');
});

//ADMIN CENTER

router.get('/admin', function(req,res){
    {
        if (req.session['user'] == null) {
            return res.redirect('/login');
        }
        if(req.session['user'].admin == false)
        {
            return res.redirect('/control');
        }
        Account.find({}).exec(function (err, docs) {
            res.render('admin', {users:docs, pagetitle : "RoboDog | Administrator Center" });
        });
    }
});

router.get('/admin/edit/:id', function(req,res){
    Account.findById(req.param('id')).exec(function (err, docs){
        res.render('edit', {user:docs, pagetitle : "RoboDog | Editing "+docs.username});
    });
});

router.post('/admin/edit', function (req, res){
    Account.findByIdAndUpdate(req.param('id'),{username:req.param('username'), admin:req.param('admin')}).exec(function(){
        req.session['user'].admin=req.param('admin');
        req.session['user'].username = req.param('username');
        res.redirect('/admin');
    });
});

router.get('/admin/delete/:id',function(req,res){
    Account.findByIdAndRemove(req.param('id')).exec(function(){
        res.redirect('/admin');
    });
});
module.exports = router;
