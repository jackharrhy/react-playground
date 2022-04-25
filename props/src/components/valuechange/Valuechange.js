import React, {useState} from 'react'

const Valuechange = () => {
  const [value, setValue] = useState('')
  return (
    <div className='container'>
        <h2>Button disabled until value on input</h2>
        <p>Make button disabled when there is no character on the input field. Enable the button when there is a atleast one character.</p>
        <input 
        type='text'
        placeholder='Enter Text...'
        onChange={(e) => setValue(e.target.value)}
        />
        <button style={{marginLeft: '1rem'}} disabled={value.length < 1}>Submit</button>
    </div>
  )
}

export default Valuechange