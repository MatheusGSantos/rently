import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Navigate,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, ...rest }) => {
  const { user } = useAuth();
  const Component = rest.element;

  return (
    <ReactDOMRoute
      {...rest}
      element={isPrivate && !!!user ? <Navigate to="/" replace /> : Component}
    />
  );
};

export default Route;
