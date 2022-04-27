import React, {useState} from 'react'

const Time = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)

  return (
    <div className='container'>
        <h2>Current Time: {time}</h2>
    </div>
  )
}

export default Time