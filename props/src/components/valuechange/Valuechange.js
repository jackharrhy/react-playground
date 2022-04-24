import React, {useState} from 'react'

const Valuechange = () => {
  const [value, showValue] = useState('')

  return (
    <div className='container'>
        <h2>Button disabled until value on input</h2>
        <p>Make button disabled when there is no character on the input field. Enable the button when there is a atleast one character.</p>
        <input
        type='text'
        placeholder='Enter text...'
        value={value}
        onChange={(e) => showValue(e.target.value)}
        />
        <button disabled={value.lenght < 1} style={{marginLeft: '0.5rem'}}>Submit</button>
    </div>
  )
}

export default Valuechange