import React, {useState, useEffect} from 'react'

const Userdata = () => {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const [userData, setUserData] = useState({})

  const getUserDate = async () => {
    const response = await fetch(url)
    const jsonData = await response.json()
    setUserData(jsonData)
  }

  useEffect(() => {
    getUserDate()
  },[])

  return (
    <div className='container'>
        <h2>User Data API Fetch with async</h2>
        <p>Given the URL: (https://jsonplaceholder.typicode.com/users/1) make this app fetch the data and display them in the browser.</p>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Website:</strong> {userData.website}</p>
    </div>
  )
}

export default Userdata