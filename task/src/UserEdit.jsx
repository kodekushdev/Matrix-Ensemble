// EditForm.jsx
import React, { useState } from "react";

function UserEdit({ user, handleUpdate, setEditingUser }) {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(editedUser);
    setEditingUser(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={editedUser.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={editedUser.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        value={editedUser.role}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditingUser(null)}>
        Cancel
      </button>
    </form>
  );
}

export default UserEdit;
