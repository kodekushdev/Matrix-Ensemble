import PropTypes from "prop-types";
function UserTable({ users }) {
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
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-100">
                    <td className="py-3 ps-4">
                      <div className="flex items-center h-5">
                        <input
                          id="hs-table-checkbox-1"
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 "
                        />
                        <label
                          htmlFor="hs-table-checkbox-1"
                          className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 "></td>
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
UserTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UserTable;
