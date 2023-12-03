// Import necessary dependencies
import { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./UserTable";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import UserEdit from "./UserEdit";
import BulkDelete from "./BulkDelete";
function UserList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 10;
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [editingUser, setEditingUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const handleEdit = (user) => {
    setEditingUser(user);
  };
  const handleUpdate = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };
  const handleDelete = (userIds) => {
    const updatedUsers = users.filter((user) => !userIds.includes(user.id));
    setUsers(updatedUsers);
    setSelectedUsers([]);
  };

  const currentUsers = filteredUsers.slice(indexOfFirst, indexOfLast);
  const pageNumbers = Math.ceil(filteredUsers.length / usersPerPage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-between  items-center">
        <SearchBar
          setCurrentPage={setCurrentPage}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <BulkDelete selectedUsers={selectedUsers} handleDelete={handleDelete} />
      </div>
      <UserTable
        currentUsers={currentUsers}
        handleEdit={handleEdit}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
        selectedUsers={selectedUsers}
        setSelectedUsers={setSelectedUsers}
      />
      <Pagination
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
export default UserList;
