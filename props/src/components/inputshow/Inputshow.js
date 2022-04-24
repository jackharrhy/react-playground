import React, {useState} from 'react'

const Inputshow = () => {
  const [value, setValue] = useState('')
  return (
    <div className="container">
      <h2>Input Field Show Text On Type</h2>
      <p>User should be able to type in any characters on input and those characters should show in browser</p>
      <input 
      type='text'
      placeholder='Enter text...'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      />
      <h4>{value}</h4>
    </div>
  );
}

export default Inputshow