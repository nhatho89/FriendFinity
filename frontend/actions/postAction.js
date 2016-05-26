var PostUtil = require('../util/postUtil');
var PostConstants = require('../constants/postConstants.js');
var AppDispatcher = require('../dispatchers/dispatcher');

var PostAction = {

  getAllPosts: function(userId){
    debugger
    PostUtil.fetchAllPosts(userId, this.receiveAllPosts);
  },

  receiveAllPosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  createNewPost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_CREATED,
      post: post
    });
  },

};

module.exports = PostAction;
