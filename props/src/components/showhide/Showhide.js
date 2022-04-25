import React, {useState} from 'react'

const Showhide = () => {
  const [show, setShow] = useState()
    return (
    <div className='container'>
        <h2>Button Click to Show and Hidde an Element</h2>
        <p>User should be able to click on a button to show and hide an element and change wording on button from show to hide on click</p>
        <button onClick={() => setShow(!show)}>
          {show ? 'Hide Element' : 'Show Element'}
        </button>
        {show && <h2 style={{color: 'red', textAlign: 'center'}}>That's Amazing!</h2>}
    </div>
  )
}

export default Showhide