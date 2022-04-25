import React, {useState} from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='container'>
        <h2>Button Counter</h2>
        <p>Pressing the Increment button should increase the counter by one. Pressing the Decrement button should reduce the number by one</p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button style={{padding: '0.5rem 2rem', marginRight: '1rem', borderRadius: '8px'}} onClick={() => setCount(count + 1)}>+</button>
          <h2>{count}</h2>
          <button style={{padding: '0.5rem 2rem', marginLeft: '1rem', borderRadius: '8px'}} onClick={() => setCount(count - 1)}>-</button>
        </div>
    </div>
  )
}

export default Counter