var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var IndexRoute = ReactRouter.IndexRoute;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var Redirect = ReactRouter.Redirect;
var App = require('./components/app');
var Homepage = require('./components/homepage.jsx');
var LandingPage = require('./components/landingpage.jsx');
var FriendsIndex = require('./components/friendsIndex.jsx');

var routes = (
  <Route component={App} path="/">
    <IndexRoute component={LandingPage}/>
    <Route path="home" component={Homepage}/>
    <Route path="friends" component={FriendsIndex}/>
  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#content');
  ReactDom.render(<Router history={hashHistory}>{routes}</Router>, root);
});
