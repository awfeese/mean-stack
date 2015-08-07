var mongoose = require('mongoose'),
  encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: {type: String, required: '{PATH} is required!'},
  lastName: {type: String, required: '{PATH} is required!'},
  username: {
    type: String,
    required: '{PATH} is required!',
    unique: true
  },
  salt: {type: String, required: '{PATH} is required!'},
  hashed_pwd: {type: String, required: '{PATH} is required!'},
  roles: [String]
});
userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashedPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  },
  hasRole: function(role) {
    return this.roles.indexOf(role) > -1;
  }
}
var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
  User.find({}).exec(function(err, collection) {
    if (collection.length == 0) {
      var salt, hash;

      salt = encrypt.createSalt();
      hash = encrypt.hashedPwd(salt, 'andrew');
      User.create({firstName: 'Andrew', lastName: 'Feese', username: 'afeese', salt: salt, hashed_pwd: hash, roles: ['admin']});

      salt = encrypt.createSalt();
      hash = encrypt.hashedPwd(salt, 'sarah');
      User.create({firstName: 'Sarah', lastName: 'Feese', username: 'sfeese', salt: salt, hashed_pwd: hash, roles: []});
    }
    encrypt = require('../utilities/encryption');
  });
}

exports.createDefaultUsers = createDefaultUsers;