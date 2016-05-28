var React = require('react');
var FriendshipActions = require('../actions/friendshipActions');


var FriendIndexItem = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    FriendshipActions.unfriend(this.props.friend.id)
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
      <div className="pointer">
        <i className="fa fa-minus-circle " aria-hidden="true" id={"addfriend" + this.props.friend.id} style={{zIndex: '-3', position: 'absolute', color: 'red', paddingTop: '10',paddingLeft: '40'}}>Unfriend</i>
        <img className="people-nav" id={this.props.friend.id} src={this.props.friend.profile_pic} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} onClick={this.handleClick}/>
      </div>
    );
  }

});

module.exports = FriendIndexItem;
