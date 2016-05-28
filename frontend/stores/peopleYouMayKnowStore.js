var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatchers/dispatcher');
var PeopleYouMayKnowConstants = require('../constants/peopleYouMayKnowConstants');

var PeopleYouMayKnow = new Store(AppDispatcher);

var _peopleYouMayKnow = [];

PeopleYouMayKnow.allPeople = function (){
  return _peopleYouMayKnow
};

resetPeople = function (peopleYouMayKnow) {
  _peopleYouMayKnow = peopleYouMayKnow;
};

PeopleYouMayKnow.find = function (friendId) {
  var foundFriend;
  _peopleYouMayKnow.forEach(function (friend) {
    if (friend.id === friendId){
      foundFriend = friend
    }
  })
  return foundFriend
}

PeopleYouMayKnow.__onDispatch = function(payload){
  switch(payload.actionType) {
    case PeopleYouMayKnowConstants.PEOPLE_RECEIVED:
    resetPeople(payload.peopleYouMayKnow)
    PeopleYouMayKnow.__emitChange()
    break;
  }
};

module.exports = PeopleYouMayKnow;
