var React = require('react');
var PostAction = require('../actions/postAction');
// var SessionStore = require('../stores/sessionStore');
var PostStore = require('../stores/postStore');

var StatusUpdate = React.createClass({
  getInitialState: function() {
    return {
      body: "Something is wrong",
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    PostAction.createNewPost({
      authorId: this.props.user.id,
      body: this.state.body
    })
    $('.status')[0].value = ""
    PostAction.getAllPosts(this.props.user.id)
  },

  statusHandler: function(e) {
    this.setState({
      body: e.target.value
    })
  },

  render: function() {

    return (
      <div className="status-update-container row">
        <div>
          <img className="status-profile" src={this.props.user.profile_pic}></img>
        </div>
        <div className="col center">
          <form className='status-form' onSubmit={this.handleSubmit}>
            <div className="status-update">
              <input
                type="text"
                className="status"
                placeholder="What's on your mind?"
                onChange={this.statusHandler}
                required
                autoFocus
                />
            </div>
            <button
               className="auth-button sub-auth-button pointer"
               type="submit">
               Post
            </button>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = StatusUpdate;
