// this function will sleep for the given milliseconds
// it basically fakes the latency of an external API call
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const FAKE_SLEEP_MS = 500;

export const fakeApi = () => {
  const getUsersFromStorage = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };

  const users = getUsersFromStorage();

  const persistUsers = () => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const checkIfUserExists = (id) => {
    return users.find((user) => user.id === id);
  };

  return {
    createUser: async (id, name) => {
      await sleep(FAKE_SLEEP_MS);
      if (checkIfUserExists(id)) {
        throw new Error("User already exists");
      }
      users.push({ id, name });
      persistUsers();
    },
    deleteUser: async (id) => {
      await sleep(FAKE_SLEEP_MS);
      if (!checkIfUserExists(id)) {
        throw new Error("User does not exists");
      }
      users.splice(
        users.findIndex((user) => user.id === id),
        1
      );
      persistUsers();
    },
    listUsers: async () => {
      await sleep(FAKE_SLEEP_MS);
      return users;
    },
  };
};
