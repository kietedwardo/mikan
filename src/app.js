import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Signin,
  Browse,
  Home,
  Plan,
  Registration,
  Payment,
  Signup,
  Profile,
  Genre,
  Anime,
  Forgot,
} from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserNavigate, ProtectedRoute } from "./helpers/routes.js";
import { useAuthListener } from "./hooks";

export function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <IsUserNavigate user={user} loggedInPath={ROUTES.BROWSE}>
              <Signup />
            </IsUserNavigate>
          }
        />
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <IsUserNavigate user={user} loggedInPath={ROUTES.BROWSE}>
              <Signin />
            </IsUserNavigate>
          }
        />
        <Route
          path={ROUTES.BROWSE}
          element={
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.PROFILE}
          element={
            <ProtectedRoute user={user}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.GENRE}
          element={
            <ProtectedRoute user={user}>
              <Genre />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.ANIME}
          element={
            <ProtectedRoute user={user}>
              <Anime />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.HOME}
          element={
            <IsUserNavigate user={user} loggedInPath={ROUTES.BROWSE}>
              <Home />
            </IsUserNavigate>
          }
        />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/plan" element={<Plan />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/forgot" element={<Forgot />} />
      </Routes>
    </Router>
  );
}
