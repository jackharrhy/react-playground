import React from 'react'

const Users = () => {
  const users = [
    {name: 'Mike', age: 42, id: 1},
    {name: 'John', age: 40, id: 2},
    {name: 'Paul', age: 38, id: 3}
  ]

  const userList = users.map((users) => <li key={users.id}><strong>Name: </strong>{users.name}<strong> Age: </strong>{users.age}</li>)

  return (
    <div className='container'>
      <h2>User List Array</h2>
      <p>Display all users in the browser</p>
      {userList}
    </div>
  )
}

export default Users