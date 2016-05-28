var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatchers/dispatcher');
var FriendConstants = require('../constants/friendConstants');
var FriendStore = new Store(AppDispatcher);

var _friends = [];
var _peopleYouMayKnow = [];

FriendStore.allPeople = function (){
  return _peopleYouMayKnow
};

resetPeople = function (peopleYouMayKnow) {
  _peopleYouMayKnow = peopleYouMayKnow;
};

resetFriends = function (friends) {
  _friends = friends
};

removePerson = function(friend) {
  var friends = [];
  _peopleYouMayKnow.forEach(function(el, idx){
    if (el.id !== friend.id && el.id !== friend.id){
      friends.push(el)
    }
  })
  resetPeople(friends)
};

removeFriend = function(friend) {
  var friends = [];
  _friends.forEach(function(el, idx){
    if (el.id !== friend.id && el.id !== friend.id){
      friends.push(el)
    } else {
      _peopleYouMayKnow.concat(friend)
    }
  })
  resetFriends(friends)
};

addFriend = function(friend) {
  _friends = _friends.concat(friend)
};

addPerson = function(friend) {
  _peopleYouMayKnow = _peopleYouMayKnow.concat(friend)
};


FriendStore.allRequests = function (){
  return _requests
};


FriendStore.allFriends = function (){
  return _friends
};

FriendStore.areFriends = function (friendId){
  var rf = false
  _friends.forEach(function(friend, idx){
    if (friend.id === parseInt(friendId)){
      rf = true
    }
  })
  return rf
};

FriendStore.find = function (friendId) {
  var foundFriend;
  _friends.forEach(function (friend) {
    if (friend.id === friendId){
      foundFriend = friend
    }
  })
  return foundFriend
}

FriendStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case FriendConstants.REQUESTS_RECEIVED:
    resetRequests(payload.requests)
    FriendStore.__emitChange()
    break;
    case FriendConstants.FRIENDS_RECEIVED:
    resetFriends(payload.friends)
    FriendStore.__emitChange()
    break;
    case FriendConstants.REMOVE_FRIEND:
    removeFriend(payload.friend)
    addPerson(payload.friend)
    FriendStore.__emitChange()
    break;
    case FriendConstants.FRIENDSHIP_APPROVED:
    addFriend(payload.request)
    removePerson(payload.request)
    FriendStore.__emitChange()
    break;
    case FriendConstants.PEOPLE_RECEIVED:
    resetPeople(payload.peopleYouMayKnow)
    FriendStore.__emitChange()
    break;
  }
};

module.exports = FriendStore;
