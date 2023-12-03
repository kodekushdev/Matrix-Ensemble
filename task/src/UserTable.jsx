import { useEffect, useState } from "react";
import UserEdit from "./UserEdit";
function UserTable({
  currentUsers,
  handleEdit,
  handleUpdate,
  handleDelete,
  editingUser,
  setEditingUser,
  selectedUsers,
  setSelectedUsers,
}) {
  const [selectedUsersLocal, setSelectedUsersLocal] = useState([]);
  const handleRowClick = (id) => {
    setSelectedUsersLocal((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(id)) {
        return prevSelectedUsers.filter((userId) => userId !== id);
      } else {
        return [...prevSelectedUsers, id];
      }
    });
  };
  const handleSelectAll = () =>
    setSelectedUsersLocal((prevSelectedUsers) =>
      prevSelectedUsers.length < currentUsers.length
        ? currentUsers.map((user) => user.id)
        : []
    );
  useEffect(() => {
    setSelectedUsers(selectedUsersLocal);
  }, [selectedUsersLocal, setSelectedUsers]);
  return (
    <div className="flex flex-col m-5">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className=" border rounded-lg overflow-hidden ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" className="py-3 ps-4">
                    <div className="flex items-center h-5">
                      <input
                        id="hs-table-checkbox-all"
                        type="checkbox"
                        className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                        checked={selectedUsers.length === currentUsers.length}
                        onChange={handleSelectAll}
                      />
                      <label
                        htmlFor="hs-table-checkbox-all"
                        className="sr-only">
                        Checkbox
                      </label>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    Name
                  </th>
                  <th
                    scope="col"
                    className=" px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    Email
                  </th>
                  <th
                    scope="col"
                    className=" px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    Role
                  </th>
                  <th
                    scope="col"
                    className=" px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                {currentUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-100 "
                    onClick={() => handleRowClick(user.id)}>
                    <td className=" py-4 ps-4">
                      <div className="flex items-center h-5">
                        <input
                          id="hs-table-checkbox-1"
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 "
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => {}}
                        />
                        <label
                          htmlFor="hs-table-checkbox-1"
                          className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6  whitespace-nowrap text-sm font-medium text-gray-800">
                      {user.name}
                    </td>
                    <td className="px-6  whitespace-nowrap text-sm font-medium text-gray-800">
                      {user.email}
                    </td>
                    <td className="px-6  whitespace-nowrap text-sm font-medium text-gray-800 ">
                      {user.role}
                    </td>
                    <td className="px-6  whitespace-nowrap text-sm font-medium text-gray-800 ">
                      {editingUser && editingUser.id === user.id ? (
                        <UserEdit
                          user={editingUser}
                          handleUpdate={handleUpdate}
                          setEditingUser={setEditingUser}
                        />
                      ) : (
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleEdit(user)}
                            className="bg-blue-500 text-white p-1 rounded mr-2 hover:bg-blue-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="bg-red-500 text-white p-1 rounded hover:bg-red-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-5 h-5">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserTable;
