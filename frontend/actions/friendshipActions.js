var FriendUtil = require('../util/friendUtil');
var FriendConstants = require('../constants/friendConstants');
var AppDispatcher = require('../dispatchers/dispatcher');

var FriendActions = {

  // getFriendRequests: function(){
  //   FriendUtil.fetchFriendRequests(this.receiveAllRequests);
  // },

  createFriend: function(friendId) {
    FriendUtil.createFriendRequest(friendId, this.approveFriendRequest);
  },

  unfriend: function(friendId) {
    FriendUtil.removeFriendRequest(friendId, this.removeFriend);
  },

  // receiveAllRequests: function (requests) {
  //   Dispatcher.dispatch({
  //     actionType: Constants.REQUESTS_RECEIVED,
  //     requests: requests
  //   });
  // },

  approveFriendRequest: function (data) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.FRIENDSHIP_APPROVED,
      request: data
    });
  },

  removeFriend: function(friend){
    debugger
    AppDispatcher.dispatch({
      actionType: FriendConstants.REMOVE_FRIEND,
      friend: friend
    });
  },

  // sendFriendRequest: function(friendRequest){
  //   AppDispatcher.dispatch({
  //     actionType: FriendConstants.REQUEST_FRIEND,
  //     friendRequest: friendRequest
  //   });
  // }

};

module.exports = FriendActions;
