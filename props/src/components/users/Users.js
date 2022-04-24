import React from 'react'

const Users = () => {
  const users = [
    {name: 'Mike', age: 42, id: 1},
    {name: 'Mark', age: 39, id: 2},
    {name: 'Matthew', age: 48, id: 3},
  ];

  const userList = users.map((users) => <li key={users.id}>{users.name}</li>)
  return (
    <div className='container'>
      <h2>User List Array</h2>
      <p>Display all users in the browser</p>
      {userList}
    </div>
  )
}

export default Users