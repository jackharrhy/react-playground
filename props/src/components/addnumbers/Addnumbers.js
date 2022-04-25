import React, {useState} from 'react'

const Addnumbers = () => {
  const [number1, setNumber1] = useState()
  const [number2, setNumber2] = useState()
  const [total, setTotal] = useState()

  function calculateTotal() {
    setTotal(number1 + number2)
  }
  return (
    <div className='container'>
        <h2>Add Two Numbers</h2>
        <p>When user places numbers on first and second input and hit button, should show total on total line.</p>
        <input 
        type='number'
        placeholder='First Number...'
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
        style={{marginRight: '1rem'}}
        />
        <input 
        type='number'
        placeholder='Second Number...'
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
        style={{marginRight: '1rem'}}
        />
        <button onClick={calculateTotal}>Calculate</button>
        <h2>Total: {total || ''}</h2>
    </div>
  )
}

export default Addnumbers