"use strict";

var _ReactDOM = ReactDOM;
var render = _ReactDOM.render;
var _React = React;
var Component = _React.Component;
var _ReactRouterDOM = ReactRouterDOM;
var Router = _ReactRouterDOM.BrowserRouter;
var Route = _ReactRouterDOM.Route;
var Link = _ReactRouterDOM.Link;

var Home = function Home() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "Home"
    )
  );
};

var About = function About() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "About"
    )
  );
};

var Topic = function Topic(_ref) {
  var match = _ref.match;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      null,
      match.params.topicId
    )
  );
};

var Topics = function Topics(_ref2) {
  var match = _ref2.match;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "Topics"
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        React.createElement(
          Link,
          { to: match.url + "/rendering" },
          "Rendering with React"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          Link,
          { to: match.url + "/components" },
          "Components"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          Link,
          { to: match.url + "/props-v-state" },
          "Props v. State"
        )
      )
    ),
    React.createElement(Route, { path: match.url + "/:topicId", component: Topic }),
    React.createElement(Route, { exact: true, path: match.url, render: function render() {
        return React.createElement(
          "h3",
          null,
          "Please select a topic."
        );
      } })
  );
};

var BasicExample = function BasicExample() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/" },
            "Home"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/about" },
            "About"
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement(
            Link,
            { to: "/topics" },
            "Topics"
          )
        )
      ),
      React.createElement("hr", null),
      React.createElement(Route, { exact: true, path: "/", component: Home }),
      React.createElement(Route, { path: "/about", component: About }),
      React.createElement(Route, { path: "/topics", component: Topics })
    )
  );
};

render(React.createElement(BasicExample, null), document.getElementById('target'));

// console.log(Router);
