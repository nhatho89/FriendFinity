var PostUtil = {

  fetchAllPosts: function (userId, receiveAllPosts) {
    debugger
    $.ajax({
      url: "api/posts",
      method: "get",
      data: { post: {
        author_id: userId,
        body: ""
        }
      },
      success: function (posts) {
        debugger
        receiveAllPosts(posts);
      },
      error: function(error,status) {
        debugger
      }
    })
  },

  createNewPost: function (post, receiveNewPost) {
    debugger
    $.ajax({
      url: "api/posts",
      method: "post",
      data: { post: {
        author_id: post.authorId,
        body: post.body
        }
      },
      success: function (posts) {
        debugger
        receiveNewPost(posts);
      },
      error: function(error,status) {
        debugger
      }
    })
  }
};
module.exports = PostUtil;
