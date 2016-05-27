var React = require('react');
var PeopleYouMayKnowStore = require('../stores/peopleYouMayKnowStore');
var PeopleYouMayKnowAction = require('../actions/peopleYouMayKnowAction');

var PeopleYouMayKnow = React.createClass({
  getInitialState: function() {
    return ({
      people: PeopleYouMayKnowStore.allPeople()
    })
  },

  componentDidMount: function() {
    this.peopleListener = PeopleYouMayKnowStore.addListener(this.onChange)
    PeopleYouMayKnowAction.getPeopleYouMayKnow();
  },

  onChange: function() {
    this.setState({
      people: PeopleYouMayKnowStore.allPeople()
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
          <div>
            <img className="people-nav" src={person.profile_pic} onMouseEnter={this.mouseEnter} nMouseLeave={this.mouseLeave}/>
          </div>
        )
      })
    } else {
      people = <p1>You are friends with everyone!</p1>
    }
    return (
      <div className="col wrap">
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
