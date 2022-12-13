import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export function IsUserNavigate({ user, loggedInPath, children }) {
  return !user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: loggedInPath,
      }}
    />
  );
}

export function ProtectedRoute({ user, children }) {
  return user ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/signin",
      }}
    />
  );
}
