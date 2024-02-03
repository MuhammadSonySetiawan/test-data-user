import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleUpdateProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("profilePicture", profilePicture);

      const response = await axios.post(
        "http://localhost:3001/profile/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        // Do something after updating profile
        console.log("Profile updated successfully");
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <img
        src={`http://localhost:3001/uploads/default.jpg`}
        alt="Profile Picture"
        style={{ maxWidth: "200px" }}
      />
      <form>
        <div className="mb-3">
          <label>Change Profile Picture:</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdateProfile}
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
