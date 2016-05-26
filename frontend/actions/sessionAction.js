var AppDispatcher = require('../dispatchers/dispatcher.js');
var SessionConstants = require('../constants/sessionConstants.js');
var UserUtil = require('../util/userUtil.js');

var SessionActions = {

  signUp: function(userInfo){
    debugger
    UserUtil.createUserAccount(userInfo, this.receiveNewUser);
  },

  logIn: function(credentials) {
    UserUtil.createSession(credentials, this.receiveCurrentUser)
  },

  logOut: function() {
    UserUtil.destroySession(this.removeCurrentUser);
  },

  fetchSession: function() {
    UserUtil.fetchSession(this.receiveCurrentUser);
  },

// ============= Callbacks =============== //

  receiveNewUser: function(user){
    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVENEWUSER,
      user: user
    });
  },

  receiveCurrentUser: function(user){

    AppDispatcher.dispatch({
      actionType: SessionConstants.RECEIVEUSER,
      user: user
    });
  },

  removeCurrentUser: function(){
    AppDispatcher.dispatch({
      actionType: SessionConstants.REMOVECURRENTUSER
    });
  }

};

module.exports = SessionActions;
