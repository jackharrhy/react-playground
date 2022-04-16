import React from 'react'
import './index.css'

const MyButton = () => {
    function handleClick() {
        alert('You clicked me!')
    }
    return (
        <button onClick={handleClick}>Click Here</button>
    )
}

const products = [
    {title: 'Cabbage', id: 1, isFruit: false},
    {title: 'Apple', id: 2, isFruit: true},
    {title: 'Garlic', id: 3, isFruit: false},
];

const listItems = products.map(product =>
    <li key={product.id} style={{color: product.isFruit ? 'magenta': 'darkgreen'}}>
        {product.title}
    </li>
    );

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const App = () => {
  return (
    <div>
      <div className="header">
        <h1>React Playground</h1>
        <MyButton />
      </div>
      <div className='person'>
          <h2>{user.name}</h2>
          <img src={user.imageUrl} alt={'Photo of' + user.name} style={{width: user.imageSize, height: user.imageSize}} className='avatar'/>
      </div>
      <div className='products'>
        <ul>
            {listItems}
        </ul>
      </div>
    </div>
  );
}

export default App