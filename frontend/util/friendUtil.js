var FriendUtil = {

  // fetchFriendRequests: function (receiveFriendRequests) {
  //   //userId = [userId] Need to add friend's id into this array so they can be selected in ActiveRecord
  //
  //
  //   $.ajax({
  //     url: "api/requests",
  //     method: "get",
  //     success: function (requests) {
  //       debugger
  //       receiveFriendRequests(requests);
  //     },
  //     error: function(error,status) {
  //       debugger
  //     }
  //   })
  // },

  createFriendRequest: function (friendId, approveFriendRequest) {

    $.ajax({
      url: "api/friendships",
      method: "post",
      data: { friend: {
        friend_id: friendId
        }
      },
      success: function (request) {
        debugger
        approveFriendRequest(request);
      },
      error: function(error,status) {
        debugger

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
        debugger
        removeFriend(request);
      },
      error: function(error,status) {
        debugger

      }
    })
  }

};
module.exports = FriendUtil;
