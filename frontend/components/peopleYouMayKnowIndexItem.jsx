var React = require('react');
var PeopleYouMayKnowStore = require('../stores/peopleYouMayKnowStore');
var FriendshipActions = require('../actions/friendshipActions');
var PeopleYouMayKnowIndexItem = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
    FriendshipActions.createFriend(this.props.friend.id)
  },

  mouseEnter: function(e) {

    e.preventDefault();
    $("#addfriend" + e.target.id).css('z-index', 2);
    $("#" + e.target.id).css('opacity', .4);
  },

  mouseLeave: function(e) {
    e.preventDefault();
    $("#addfriend" + e.target.id).css('z-index', -1);
    $("#" + e.target.id).css('opacity', 1);
  },

  render: function() {
    return (
      <div>
        <i className="fa fa-plus-circle " aria-hidden="true" id={"addfriend" + this.props.friend.id} style={{zIndex: '-3', position: 'absolute', color: 'green'}}>Add Friend</i>
        <img className="people-nav" id={this.props.friend.id} src={this.props.friend.profile_pic} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.handleClick}/>
      </div>
    );
  }

});

module.exports = PeopleYouMayKnowIndexItem;
