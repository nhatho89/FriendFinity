var React = require('react');
var PostAction = require('../actions/postAction');
var SessionStore = require('../stores/sessionStore');

var StatusUpdate = React.createClass({
  getInitialState: function() {
    return {
      body: "Something is wrong"
    }
  },

  handleSubmit: function(e) {
    
    e.preventDefault();
    PostAction.createNewPost({
      authorId: SessionStore.currentUser().id,
      body: this.state.body
    })
  },

  statusHandler: function(e) {
    this.setState({
      body: e.target.value
    })
  },

  render: function() {
    return (
      <div>
        <form className='status-auth' onSubmit={this.handleSubmit}>
          <div className="status-udate">
            <input
              type="text"
              id="status"
              placeholder="What's on your mind?"
              onChange={this.statusHandler}
              required
              autoFocus
            />
          </div>
        </form>
      </div>
    );
  }

});

module.exports = StatusUpdate;
