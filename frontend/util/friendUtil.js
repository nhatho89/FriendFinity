var FriendUtil = {

  // fetchFriendRequests: function (receiveFriendRequests) {
  //   //userId = [userId] Need to add friend's id into this array so they can be selected in ActiveRecord
  //
  //
  //   $.ajax({
  //     url: "api/requests",
  //     method: "get",
  //     success: function (requests) {
  //       
  //       receiveFriendRequests(requests);
  //     },
  //     error: function(error,status) {
  //       
  //     }
  //   })
  // },

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

  createFriendRequest: function (friendId, approveFriendRequest) {

    $.ajax({
      url: "api/friendships",
      method: "post",
      data: { friend: {
        friend_id: friendId
        }
      },
      success: function (request) {
        
        approveFriendRequest(request);
      },
      error: function(error,status) {
        

      }
    })
  },

  removeFriendRequest: function (friendId, removeFriend) {

    $.ajax({
      url: "api/friendships/destroy",
      method: "delete",
      data: { friend: {
        friend_id: friendId
        }
      },
      success: function (request) {
        
        removeFriend(request);
      },
      error: function(error,status) {
        

      }
    })
  }

};
module.exports = FriendUtil;
