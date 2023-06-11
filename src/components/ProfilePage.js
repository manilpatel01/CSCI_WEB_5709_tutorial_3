import React from 'react';
import { useLocation } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const location = useLocation();
  const profileData = location.state.user;
  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile Page</h2>
      <div className="profile-details">
        <p className="profile-info">
          <span className="info-label">First Name:</span> {profileData.firstName}
        </p>
        <p className="profile-info">
          <span className="info-label">Last Name:</span> {profileData.lastName}
        </p>
        <p className="profile-info">
          <span className="info-label">Email:</span> {profileData.email}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
