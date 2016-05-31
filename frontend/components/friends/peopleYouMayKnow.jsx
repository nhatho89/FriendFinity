var React = require('react');
var FriendStore = require('../../stores/friendStore');
var FriendActions = require('../../actions/friendshipActions');
var PeopleYouMayKnowIndexItem = require('./peopleYouMayKnowIndexItem');

var PeopleYouMayKnow = React.createClass({
  getInitialState: function() {
    return ({
      people: FriendStore.allPeople()
    })
  },

  componentDidMount: function() {
    this.peopleListener = FriendStore.addListener(this.onChange)
    FriendActions.getPeopleYouMayKnow();
  },

  onChange: function() {
    this.setState({
      people: FriendStore.allPeople()
    })
  },

  componentWillUnmount: function() {
    this.peopleListener.remove();
  },

  render: function() {
    var people;
    if (this.state.people.length > 0) {
      people = this.state.people.map(function(person) {
        return (
          <PeopleYouMayKnowIndexItem friend={person} key={person.id}/>
        )
      })
    } else {
      people = <p1>You are friends with everyone!</p1>
    }

    return (
      <div className="col wrap status-update-container">
        <p1 className="people-nav-title center">People You May Know</p1>
          <div className="max-width center">
            <div className="low-width row wrap">
              {people}
            </div>
          </div>
      </div>
    );
  }

});

module.exports = PeopleYouMayKnow;
