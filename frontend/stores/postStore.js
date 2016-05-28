var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatchers/dispatcher');
var PostConstants = require('../constants/postConstants');
var PostStore = new Store(AppDispatcher);

var _posts = [];

PostStore.allPosts = function (){
  return _posts
};

PostStore.find = function (postId) {
  var foundPost;
  _posts.forEach(function (post) {
    if (post.id === postId){
      foundPost = post
    }
  })
  return foundPost
};

resetPosts = function (posts) {
  _posts = posts;
};

addPost = function(post) {
  _posts = [post].concat(_posts)
};

PostStore.__onDispatch = function(payload){
  switch(payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
    resetPosts(payload.posts)
    PostStore.__emitChange()
    break;
    case PostConstants.POST_CREATED:
    addPost(payload.post)
    PostStore.__emitChange()
    break;
  }
};

module.exports = PostStore;
