var PostUtil = {

  fetchAllPosts: function (userId, receiveAllPosts) {

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
