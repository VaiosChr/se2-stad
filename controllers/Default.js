'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

// Admin endpoint to create tests for a specific user in a class
module.exports.adminClassClassNameUserUserNameTestsPOST = function adminClassClassNameUserUserNameTestsPOST(req, res, next, body, userName, className) {
  Default.adminClassClassNameUserUserNameTestsPOST(body, userName, className)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to add exercises for a specific user in a class
module.exports.classClassNameUserUserNameExercisesPOST = function classClassNameUserUserNameExercisesPOST(req, res, next, body, userName, className) {
  Default.classClassNameUserUserNameExercisesPOST(body, userName, className)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to add notes for a specific user in a class
module.exports.classClassNameUserUserNameNotesPOST = function classClassNameUserUserNameNotesPOST(req, res, next, body, userName, className) {
  Default.classClassNameUserUserNameNotesPOST(body, userName, className)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to create a new class
module.exports.createClass = function createClass(req, res, next, body) {
  Default.createClass(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to create a new user
module.exports.createUser = function createUser(req, res, next, body) {
  Default.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to delete a class
module.exports.deleteClass = function deleteClass(req, res, next, className) {
  Default.deleteClass(className)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to delete a user
module.exports.deleteUser = function deleteUser(req, res, next, userName) {
  Default.deleteUser(userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to edit user information
module.exports.editUserInfo = function editUserInfo(req, res, next, body, userName) {
  Default.editUserInfo(body, userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to edit user role
module.exports.editUserRole = function editUserRole(req, res, next, body, userName) {
  Default.editUserRole(body, userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to get class information for an admin
module.exports.getClassInfoAdmin = function getClassInfoAdmin(req, res, next, className) {
  Default.getClassInfoAdmin(className)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to get class information for a user
module.exports.getClassInfoUser = function getClassInfoUser(req, res, next, userName, className) {
  Default.getClassInfoUser(userName, className)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to get user information
module.exports.getUserInfo = function getUserInfo(req, res, next, userName) {
  Default.getUserInfo(userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to update class information for a user
module.exports.putClassInfoUser = function putClassInfoUser(req, res, next, body, userName, className) {
  Default.putClassInfoUser(body, userName, className)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Endpoint to update class information for an admin
module.exports.putClassInfoAdmin = function putClassInfoAdmin(req, res, next, body, className) {
  Default.putClassInfoAdmin(body, className)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
