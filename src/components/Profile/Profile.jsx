import React from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <p className="profile-subtitle">🚧 Coming Soon</p>
      <p className="profile-text">
        This section is under construction. We’re working on something awesome!
      </p>

      <NavLink to="/" className="profile-back">
        ← Back to Home
      </NavLink>
    </div>
  );
};
