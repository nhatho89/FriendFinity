var React = require('react');

var StatusUpdate = React.createClass({

  render: function() {
    return (
      <div>
        <form className='status-auth' onSubmit={this.handleSubmit}>
          <div className="status-udate">
            <input
              type="text"
              id="status"
              placeholder="What's on your mind?"
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
