import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import AuthLayout from "~/pages/_layouts/auth";
import DefaultLayout from "~/pages/_layouts/default";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signedIn = false;

  if (!signedIn && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signedIn && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signedIn ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
};

RouteWrapper.defaultPropts = {
  isPrivate: false
};
