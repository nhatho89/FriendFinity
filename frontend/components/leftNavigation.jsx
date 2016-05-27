var React = require('react');

var LeftNavigation = React.createClass({

  render: function() {
    var name = "";
    var profilePic = "";
    if (this.props.user.first_name) {
      name = this.props.user.first_name + " " + this.props.user.last_name
      profilePic = this.props.user.profile_pic
    }
    return (
      <div className="leftnav">
        <div className="proflistwrapper">
          <ul className="proflist">
            <li>
              <div className="row">
                <div className="leftcontentwrapper">
                  <img className="nav-profile-pic" src={profilePic}></img>
                </div>
                <div className="col center">
                  {name}
                </div>

              </div>
            </li>
            <li>
              <div className="row">
                <div>
                  <i className="fa fa-pencil-square-o space-right" aria-hidden="true"></i>
                </div>
                <div>
                  <p1>Edit Profile</p1>
                </div>
              </div>
            </li>

          </ul>

          <div className="favlistwrapper">
            <h4>
              <span className="leftnavesectionheader">FAVORITES</span>
            </h4>
              <ul className="favlist">

                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-newspaper-o space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>NewsFeed</p1>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-comments-o space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Messages</p1>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-calendar space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>&nbsp;Events</p1>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-bookmark-o space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>&nbsp;Saved</p1>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-tag space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Sale Group</p1>
                    </div>
                  </div>
                </li>
              </ul>
          </div>
          <div className="pagelistwrapper">
              <h4>
                <span className="leftnavesectionheader">PAGES</span>
              </h4>
              <ul className="pagelist">

                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-thumbs-o-up space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Like Pages</p1>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-flag-o space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Pages Feed</p1>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-calendar-plus-o space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Create Page</p1>
                    </div>
                  </div>
                </li>

              </ul>
          </div>
          <div className="grouplistwrapper">
              <h4>
                <span className="leftnavesectionheader">GROUPS</span>
              </h4>
              <ul className="grouplist">
                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-calendar-plus-o space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Create Group</p1>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-eye space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Discover Groups</p1>
                    </div>
                  </div>
                </li>

              </ul>
          </div>
          <div className="firendlistwrapper">
              <h4>
                <span className="leftnavesectionheader">FRIENDS</span>
              </h4>
              <ul className="friendlist">
                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-home space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Family</p1>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-star-o space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Close Friends</p1>
                    </div>
                  </div>
                </li>

              </ul>
          </div>
          <div className="applistwrapper">
              <h4>
                <span className="leftnavesectionheader">APPS</span>
              </h4>
              <ul className="applist">
                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-hand-pointer-o space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Pokes</p1>
                    </div>
                  </div>
                </li>


                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-picture-o space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Photos</p1>
                    </div>
                  </div>
                </li>


                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-gamepad space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Games Feed</p1>
                    </div>
                  </div>
                </li>


              </ul>
          </div>
          <div className="interestlistwrapper">
              <h4>
                <span className="leftnavesectionheader">INTERESTS</span>
              </h4>
              <ul className="insterestlist">
                <li>
                  <div className="row">
                    <div>
                      <i className="fa fa-file-text-o space-right" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p1>Pages and Public</p1>
                    </div>
                  </div>
                </li>

              </ul>
          </div>
          <div className="eventlistwrapper">
              <h4>
                <span className="leftnavesectionheader">EVENTS</span>
              </h4>
            <ul className="eventlist">

              <li>
                <div className="row">
                  <div>
                    <i className="fa fa-calendar-plus-o space-right" aria-hidden="true"></i>
                  </div>
                  <div>
                    <p1>Create Event</p1>
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = LeftNavigation;
