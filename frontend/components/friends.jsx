var React = require('react');
var FriendStore = require('../stores/friendStore');
var FriendAction = require('../actions/friendshipActions');
var FriendIndexItem = require('./friendIndexItem');

var Friends = React.createClass({

  getInitialState: function() {
    return ({
      friends: FriendStore.allFriends()
    })
  },

  componentDidMount: function() {
    this.friendsListener = FriendStore.addListener(this.friendsChange);
    FriendAction.getAllFriends();
  },

  friendsChange: function() {
    this.setState({ friends: FriendStore.allFriends() });
  },

  componentWillUnmount: function() {
    this.friendsListener.remove();
  },

  render: function() {
    var friends;
    if (this.state.friends && this.state.friends.length > 0) {
      friends = this.state.friends.map(function(friend) {
        return (
          <FriendIndexItem friend={friend} key={friend.id}/>
        )
      })
    } else {
      friends = <p1>You have no friends! =[</p1>
    }
    
    return (
      <div className="col status-update-container">
        <p1 className="people-nav-title center">Friends</p1>
        <div className="max-width center">
          <div className="low-width row wrap">
            {friends}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Friends;
