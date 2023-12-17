import React from 'react';
import './../css/profile.css'; // Import your CSS file for styling

const Profile = () => {
  return (
    <div className="profile-container">
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <p id="username">{"username"}</p>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <p id="firstName">{"firstName"}</p>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <p id="lastName">{"lastName"}</p>
        </div>
      </form>
    </div>
  );
};

export default Profile;
