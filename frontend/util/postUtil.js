var PostUtil = {

  fetchAllPosts: function (userId, receiveAllPosts) {
    //userId = [userId] Need to add friend's id into this array so they can be selected in ActiveRecord


    $.ajax({
      url: "api/posts",
      method: "get",
      data: { post: {
        author_id: userId,
        body: ""
        }
      },
      success: function (posts) {

        receiveAllPosts(posts);
      },
      error: function(error,status) {

      }
    })
  },

  createNewPost: function (post, receiveNewPost) {

    $.ajax({
      url: "api/posts",
      method: "post",
      data: { post: {
        author_id: post.authorId,
        body: post.body
        }
      },
      success: function (posts) {

        receiveNewPost(posts);
      },
      error: function(error,status) {

      }
    })
  }
};
module.exports = PostUtil;
