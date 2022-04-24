import React, {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
        <h2>Button Counter</h2>
        <p>Pressing the Increment button should increase the counter by one. Pressing the Decrement button should reduce the number by one</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={() => setCount(count + 1)} style={{padding: '1rem 2rem'}}>+</button>
          <h2 style={{padding: '0 1rem'}}>{count}</h2>
          <button onClick={() => setCount(count - 1)} style={{padding: '1rem 2rem'}}>-</button>
        </div>
    </div>
  )
}

export default Counter