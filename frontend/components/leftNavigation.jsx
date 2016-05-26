var React = require('react');

var LeftNavigation = React.createClass({

  render: function() {
    return (
      <div className="leftnav">
        <div className="proflistwrapper">
          <ul className="proflist">
            <li>
              <div className="proflistitemcontentwrapper">

                <div className="leftcontentwrapper">
                  User Photo
                </div>


                <div className="click">
                  User Name
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
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="newsfeed" />
                    </div>

                    <a title="newsfeed noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>NewsFeed</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="messages" />
                    </div>
                    <a title="messages noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Messages</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="events" />
                    </div>
                    <a title="events noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Events</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="saved" />
                    </div>
                    <a title="saved noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Saved</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="salegroups noclick" />
                    </div>
                    <a title="sale noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Sale Groups</div>
                    </a>
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
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="likepages noclick" />
                    </div>
                    <a title="likepages noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Like Pages</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="pagesfeed noclick" />
                    </div>
                    <a title="pagefeed noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Pages Feed</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="createpage noclick" />
                    </div>
                    <a title="createpage noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Create Page</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="createad noclick" />
                    </div>
                    <a title="createad noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Create Ad</div>
                    </a>
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
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="creategroup noclick" />
                    </div>
                    <a title="creategroup noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Create Group</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="newgroups noclick" />
                    </div>
                    <a title="newgroup noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>New Groups</div>
                    </a>
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
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="family noclick" />
                    </div>
                    <a title="closelist noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Family</div>
                    </a>
                  </div>
                </li>

                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="closefriends noclick" />
                    </div>
                    <a title="closelist noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Close Friends</div>
                    </a>
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
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="pokes noclick" />
                    </div>
                    <a title="pokes noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Pokes</div>
                    </a>
                  </div>
                </li>


                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="photos noclick" />
                    </div>
                    <a title="photos noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Photos</div>
                    </a>
                  </div>
                </li>


                <li>
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="gamesfeed noclick" />
                    </div>
                    <a title="gamefeed noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Games Feed</div>
                    </a>
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
                  <div className="proflistitemcontentwrapper">
                    <div className="leftcontentwrapper">
                      <a className="pagesandpublic noclick" />

                    </div>
                    <a title="pagepublic noclick">
                      <span className="leftnavimagewrap"></span>
                      <div>Pages and Public ...</div>
                    </a>
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
                <div className="proflistitemcontentwrapper">
                  <div className="leftcontentwrapper">
                    <a className="createevent noclick" />
                  </div>
                  <a title="createevent noclick">
                    <span className="leftnavimagewrap"></span>
                    <div>Create Event</div>
                  </a>
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
