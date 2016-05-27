var PeopleYouMayKnowUtil = {

  fetchPeopleYouMayKnow: function (receivePeopleYouMayKnow) {

    $.ajax({
      url: "api/people",
      method: "get",
      success: function (people) {

        receivePeopleYouMayKnow(people);
      },
      error: function(error,status) {

      }
    })
  },

  fetchFriends: function (receiveFriends) {

    $.ajax({
      url: "api/friendships",
      method: "get",
      success: function (friends) {

        receiveFriends(friends);
      },
      error: function(error,status) {

      }
    })
  },
}

module.exports = PeopleYouMayKnowUtil;
