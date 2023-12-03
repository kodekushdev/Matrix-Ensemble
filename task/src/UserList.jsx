// Import necessary dependencies
import { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./UserTable";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import UserEdit from "./UserEdit";
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
  const handleSaveEdit = (editedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === editedUser.id ? editedUser : user))
    );
    setEditingUser(null);
  };
  const handleCancelEdit = () => {
    setEditingUser(null);
  };
  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id != userId);
    setUsers(updatedUsers);
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
      <SearchBar
        filteredUsers={filteredUsers}
        setCurrentPage={setCurrentPage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <UserTable
        currentUsers={currentUsers}
        handleSaveEdit={handleSaveEdit}
        handleDelete={handleDelete}
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
