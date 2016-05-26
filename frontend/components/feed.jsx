var React = require('react');
var PostStore = require('../stores/postStore');
var PostAction = require('../actions/postAction');
var SessionStore = require('../stores/sessionStore');

var Feed = React.createClass({
  getInitialState: function() {
    return {
      feed: PostStore.allPosts()
    }
  },

  componentDidMount: function () {
    this.listener = PostStore.addListener(this._onChange);
    PostAction.getAllPosts(SessionStore.currentUser().id)
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  _onChange: function () {

    this.setState({feed: PostStore.allPosts()})
  },

  render: function() {
    var feeds;
    if (this.state.feed.length > 0) {
      feeds = this.state.feed.map(function(post) {
        return post.body
      })
    } else {
      return <div></div>
    }
    return (
      <div>
        {feeds}
      </div>
    );
  }

});

module.exports = Feed;
