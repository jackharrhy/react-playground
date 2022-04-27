import React from 'react'

const Users = () => {
  const users = [
    {name: 'Mike', id: 1},
    {name: 'John', id: 2},
    {name: 'Paul', id: 3}
  ]

  const userList = users.map((users) => <li key={users.id}>Name: {users.name}</li> )

  return (
    <div className='container'>
      <h2>User List Array</h2>
      <p>Display all users in the browser</p>
      <h2>{userList}</h2>
    </div>
  )
}

export default Users