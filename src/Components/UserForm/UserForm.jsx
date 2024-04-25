import React from 'react';
import './UserForm.css';

function UserForm({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <div className="user-form-container">
      <div className="close-icon" onClick={onClose}>×</div>
      <h3>Edit User</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="designation">Designation:</label>
          <input type="text" id="designation" name="designation" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea id="address" name="address"></textarea>
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="not-say">Not Say</option>
          </select>
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default UserForm;
