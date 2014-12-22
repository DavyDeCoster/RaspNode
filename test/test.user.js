/**
 * Created by Davy on 22/12/2014.
 */
var should = require("should");
var mongoose = require('mongoose');
var Account = require("../data/models/account.js");
var db;

describe('Account', function() {

    before(function (done) {
        db = mongoose.connect('mongodb://localhost/test');
        done();
    });

    after(function (done) {
        mongoose.connection.close();
        done();
    });

    beforeEach(function (done) {
        var account = new Account({
            username: 'ThatAccount',
            password: '123456'
        });

        account.save(function (error) {
            if (error) console.log('error' + error.message);
            else console.log('no error');
            done();
        });
    });

    it('find a user by username', function (done) {
        Account.findOne({username: 'ThatAccount'}, function (err, account) {
            account.username.should.eql('ThatAccount');
            console.log("   username: ", account.username);
            done();
        });
    });

    it('gives an error to add an account with the same username', function (done) {
        var account = new Account({
            username: 'ThatAccount',
            password: '123456'
        });

        account.save(done)
    });

    afterEach(function (done) {
        Account.remove({}, function () {
            done();
        });
    });
});