// Import necessary dependencies
import { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "./pages/UserTable";
function UserList() {
  const [users, setUsers] = useState([]);
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
  return <UserTable users={users} />;
}
export default UserList;
