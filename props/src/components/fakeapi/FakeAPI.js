import React, { useEffect, useState } from "react";
import { fakeApi } from "./api";
import CreateUserForm from "./CreateUserForm";
import "./FakeAPI.css";

const api = fakeApi();

const FakeAPI = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log("render", { users, error });

  const refetchUsers = () => {
    console.log("refetching users...");
    setLoading(true);
    api
      .listUsers()
      .then((users) => {
        console.log("got new list of users", users);
        setUsers([...users]);
        setError(null);
      })
      .catch((error) => {
        console.error("error", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDeleteUser = (id) => {
    console.log("handleDeleteUser", id);
    setLoading(true);
    api
      .deleteUser(id)
      .then(() => {
        refetchUsers();
        setError(null);
      })
      .catch((error) => {
        console.error("error", error);
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    refetchUsers();
  }, []);

  return (
    <div className="container fakeapi">
      <h1>Fake API</h1>
      <p>
        This component is an example of interfacing with what seems like an
        external API, but is actually just a regular old plain JavaScript
        function.
      </p>
      <hr />
      <h2>Users</h2>
      {!loading && users?.length === 0 && <p>no users</p>}
      {loading && <p className="loading">Loading...</p>}
      {users !== null && (
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>
              {user.name} <code>({user.id})</code>
              <button onClick={() => handleDeleteUser(user.id)}>x</button>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <CreateUserForm
        onCreateUser={async (id, name) => {
          console.log("creating user", id, name);
          try {
            setLoading(true);
            await api.createUser(id, name);
            setError(null);
            refetchUsers();
          } catch (error) {
            console.error("error", error);
            setError(error);
            setLoading(false);
          }
        }}
      />
      <hr />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default FakeAPI;
