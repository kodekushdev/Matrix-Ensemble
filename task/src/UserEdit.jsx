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
    <form onSubmit={handleSubmit} className="flex space-x-4 items-center">
      <input
        type="text"
        name="name"
        value={editedUser.name}
        onChange={handleChange}
        placeholder="Name"
        className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="email"
        value={editedUser.email}
        onChange={handleChange}
        placeholder="Email"
        className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        type="text"
        name="role"
        value={editedUser.role}
        onChange={handleChange}
        placeholder="Role"
        className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green">
        Save
      </button>
      <button
        type="button"
        onClick={() => setEditingUser(null)}
        className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-gray">
        Cancel
      </button>
    </form>
  );
}

export default UserEdit;
