import React, {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='container'>
        <h2>Button Counter</h2>
        <p>Pressing the Increment button should increase the counter by one. Pressing the Decrement button should reduce the number by one</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button onClick={() => setCount(count + 1)} style={{padding: '0.5rem 2rem', borderRadius: '8px'}}>+</button>
          <h4 style={{padding: '0 1rem'}}>{count}</h4>
          <button onClick={() => setCount(count - 1)} style={{padding: '0.5rem 2rem', borderRadius: '8px'}}>-</button>
        </div>
    </div>
  )
}

export default Counter