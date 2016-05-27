var PeopleYouMayKnowUtil = require('../util/peopleYouMayKnowUtil');
var PeopleYouMayKnowConstants = require('../constants/peopleYouMayKnowConstants');
var FriendConstants = require('../constants/friendConstants');
var AppDispatcher = require('../dispatchers/dispatcher');

var PeopleYouMayKnowAction = {

  getPeopleYouMayKnow: function(){
    PeopleYouMayKnowUtil.fetchPeopleYouMayKnow(this.receivePeopleYouMayKnow);
  },

  receivePeopleYouMayKnow: function (peopleYouMayKnow) {
    AppDispatcher.dispatch({
      actionType: PeopleYouMayKnowConstants.PEOPLE_RECEIVED,
      peopleYouMayKnow: peopleYouMayKnow
    });
  },

  getAllFriends: function(){
    PeopleYouMayKnowUtil.fetchFriends(this.receiveFriends);
  },

  receiveFriends: function (friends) {
    AppDispatcher.dispatch({
      actionType: FriendConstants.FRIENDS_RECEIVED,
      friends: friends
    });
  },

};

module.exports = PeopleYouMayKnowAction;
