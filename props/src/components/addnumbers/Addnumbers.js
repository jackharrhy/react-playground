import React, {useState} from 'react'

const Addnumbers = () => {
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [total, setTotal] = useState()

  function calculateTotal() {
    setTotal(num1 + num2)
  }

  return (
    <div className="container">
      <h2>Add Two Numbers</h2>
      <p>
        When user places numbers on first and second input and hit button,
        should show total on total line.
      </p>
      <div className="calculate">
        <input
          type="number"
          placeholder="Number One..."
          value={num1}
          onChange={(e) => setNum1(+e.target.value)}
          style={{marginRight: '1rem'}}
        />
        <input
          type="number"
          placeholder="Number Two..."
          value={num2}
          onChange={(e) => setNum2(+e.target.value)}
          style={{marginRight: '1rem'}}
        />
        <button onClick={calculateTotal}>Calculate</button>
        <h2>Total: {total}</h2>
      </div>
    </div>
  );
}

export default Addnumbers