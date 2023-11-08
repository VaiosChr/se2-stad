'use strict';


/**
 * upload student tests
 * allows the admin to upload student tests
 *
 * body UserName_tests_body Test file
 * userName String the name of the user
 * className String the name of the class
 * no response value expected for this operation
 **/
exports.adminClassClassNameUserUserNameTestsPOST = function(body,userName,className) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * upload exercises
 * the teacher wants to upload exercises
 *
 * body UserName_exercises_body  (optional)
 * userName String the name of the user
 * className String the name of the class
 * no response value expected for this operation
 **/
exports.classClassNameUserUserNameExercisesPOST = function(body,userName,className) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * upload notes
 * the teacher wants to upload notes
 *
 * body UserName_notes_body note model
 * userName String the name of the user
 * className String the name of the class
 * no response value expected for this operation
 **/
exports.classClassNameUserUserNameNotesPOST = function(body,userName,className) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * create a class
 * the secretary must be able to create a class
 *
 * body Admin_class_body Class model
 * no response value expected for this operation
 **/
exports.createClass = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new user account
 *
 * body Admin_user_body message model
 * no response value expected for this operation
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete class
 *
 * className String the name of the class
 * no response value expected for this operation
 **/
exports.deleteClass = function(className) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete a user
 *
 * userName String The user name for deletetion
 * no response value expected for this operation
 **/
exports.deleteUser = function(userName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * edit the user details
 *
 * body User_userName_body message model
 * userName String the name of the user
 * no response value expected for this operation
 **/
exports.editUserInfo = function(body,userName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * edit the role of the user
 * the admin must be able to edit the roles of the users
 *
 * body UserName_role_body  (optional)
 * userName Long the name id of the notification
 * no response value expected for this operation
 **/
exports.editUserRole = function(body,userName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get class info
 * FR1 Ο καθηγητής και η γραμματεία πρέπει να μπορεί να επεξεργαστεί την τάξη
 *
 * className String the name of the class
 * returns inline_response_200
 **/
exports.getClassInfoAdmin = function(className) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "className" : "className",
  "users" : [ {
    "grade" : 6.027456183070403,
    "user" : {
      "surname" : "surname",
      "name" : "name",
      "id" : 0,
      "userName" : "userName",
      "email" : "email"
    }
  }, {
    "grade" : 6.027456183070403,
    "user" : {
      "surname" : "surname",
      "name" : "name",
      "id" : 0,
      "userName" : "userName",
      "email" : "email"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get class info
 * FR1 Ο καθηγητής και η γραμματεία πρέπει να μπορεί να επεξεργαστεί την τάξη
 *
 * userName String the name of the user
 * className String the name of the class
 * returns inline_response_200
 **/
exports.getClassInfoUser = function(userName,className) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "className" : "className",
  "users" : [ {
    "grade" : 6.027456183070403,
    "user" : {
      "surname" : "surname",
      "name" : "name",
      "id" : 0,
      "userName" : "userName",
      "email" : "email"
    }
  }, {
    "grade" : 6.027456183070403,
    "user" : {
      "surname" : "surname",
      "name" : "name",
      "id" : 0,
      "userName" : "userName",
      "email" : "email"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get the user details
 * see the details of the user
 *
 * userName String the name of the user
 * returns adminclass_user
 **/
exports.getUserInfo = function(userName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "surname" : "surname",
  "name" : "name",
  "id" : 0,
  "userName" : "userName",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * change class info
 *
 * body Class_className_body_1 Class model
 * userName String the name of the user
 * className String the name of the class
 * no response value expected for this operation
 **/
exports.put class info user = function(body,userName,className) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * change class info
 *
 * body Class_className_body Class model
 * className String the name of the class
 * no response value expected for this operation
 **/
exports.putClassInfoAdmin = function(body,className) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

