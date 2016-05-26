var PostUtil = {

  fetchAllPosts: function (userId, receiveAllPosts) {
    $.ajax({
      url: "api/posts",
      method: "get",
      data: {author_id: userId},
      success: function (posts) {
        debugger
        receiveAllPosts(posts);
      },
      error: function(error,status) {
        debugger
      }
    })
  }
};
module.exports = PostUtil;
