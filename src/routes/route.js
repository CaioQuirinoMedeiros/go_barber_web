import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signedIn = true;

  if (!signedIn && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signedIn && !isPrivate) {
    return <Redirect to="/dashoard" />;
  }

  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.node.isRequired
};

RouteWrapper.defaultPropts = {
  isPrivate: false
};
