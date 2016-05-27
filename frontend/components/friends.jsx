var React = require('react');
var FriendStore = require('../stores/friendStore');
var PeopleYouMayKnowAction = require('../actions/peopleYouMayKnowAction');

var Friends = React.createClass({

  getInitialState: function() {
    return ({
      friends: FriendStore.allFriends()
    })
  },

  componentDidMount: function() {
    this.friendsListener = FriendStore.addListener(this.friendsChange);
    PeopleYouMayKnowAction.getAllFriends();
  },

  friendsChange: function() {
    this.setState({ friends: FriendStore.allFriends() });

  },

  componentWillUnmount: function() {
    this.friendsListener.remove();
  },

  render: function() {
    var friends;
    if (this.state.friends.length > 0) {

      friends = this.state.friends.map(function(friend) {
        return (
          <div>
            <img className="people-nav" src={friend.profile_pic}/>
          </div>
        )
      })
    } else {
      friends = <p1>You have no friends! =[</p1>
    }
    return (
      <div className="col">
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
