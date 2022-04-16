import React, {useState} from 'react'

const Test = () => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    document.querySelector('.test').innerHTML = `${name}`;
  }

  return (
    <div className="myForm">
      <div className="note">
        <form onSubmit={handleSubmit}>
          <h3>Assign value test</h3>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          <input type='submit' />
        </form>
      </div>
      <div className='box'>
        <h1 className='test'></h1>
      </div>
    </div>
  );
}

export default Test