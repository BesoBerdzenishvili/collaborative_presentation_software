import { useState } from "react";

const UserListSelector = ({ id, userList, setUserList }) => {
  const [selectedOption, setSelectedOption] = useState(
    userList.filter((i) => i.id == id)[0].status
  );

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setUserList([
      ...userList.map((user) => {
        if (user.id === id) {
          return { ...user, status: e.target.value };
        }
        return user;
      }),
    ]);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="viewer">Viewer</option>
      <option value="editor">Editor</option>
    </select>
  );
};

export default UserListSelector;
