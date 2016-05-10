var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var Redirect = ReactRouter.Redirect;
var App = require('./components/app');
var routes = (
  <Route component={App} path="/">

  </Route>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.querySelector('#content');
  ReactDom.render(<Router history={hashHistory}>{routes}</Router>, root);
});
