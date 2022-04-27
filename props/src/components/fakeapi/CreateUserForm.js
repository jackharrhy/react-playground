import React, { useState } from "react";

const CreateUserForm = ({ onCreateUser }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  const handleIdChange = (e) => setId(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);

  const handleCreateUser = (e) => {
    e.preventDefault();
    onCreateUser(id, name);
  };

  return (
    <form onSubmit={handleCreateUser}>
      <label>
        ID:
        <input type="number" name="id" value={id} onChange={handleIdChange} />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateUserForm;
