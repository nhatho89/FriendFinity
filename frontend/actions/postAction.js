var PostUtil = require('../util/postUtil');
var PostConstants = require('../constants/postConstants.js');
var AppDispatcher = require('../dispatchers/dispatcher');

var PostAction = {

  getAllPosts: function(userId){
    PostUtil.fetchAllPosts(userId, this.receiveAllPosts);
  },

  createNewPost: function(post) {
    
    PostUtil.createNewPost(post, this.receiveNewPost);
  },

  receiveAllPosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receiveNewPost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_CREATED,
      post: post
    });
  },

};

module.exports = PostAction;
