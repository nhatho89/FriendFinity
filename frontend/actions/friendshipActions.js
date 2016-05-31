var FriendUtil = require('../util/friendUtil');
var FriendConstants = require('../constants/friendConstants');
var AppDispatcher = require('../dispatchers/dispatcher');

var FriendActions = {

  getPeopleYouMayKnow: function(){
    FriendUtil.fetchPeopleYouMayKnow(this.receivePeopleYouMayKnow);
  },

  receivePeopleYouMayKnow: function (peopleYouMayKnow) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.PEOPLE_RECEIVED,
      peopleYouMayKnow: peopleYouMayKnow
    });
  },

  getAllFriends: function(){
    FriendUtil.fetchFriends(this.receiveFriends);
  },

  receiveFriends: function (friends) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.FRIENDS_RECEIVED,
      friends: friends
    });
  },

  createFriend: function(friendId) {
    FriendUtil.createFriendRequest(friendId, this.approveFriendRequest);
  },

  unfriend: function(friendId) {
    FriendUtil.removeFriendRequest(friendId, this.removeFriend);
  },

  approveFriendRequest: function (data) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.FRIENDSHIP_APPROVED,
      request: data
    });
  },

  removeFriend: function(friend){
    AppDispatcher.dispatch({
      actionType: FriendConstants.REMOVE_FRIEND,
      friend: friend
    });
  },

};

module.exports = FriendActions;
