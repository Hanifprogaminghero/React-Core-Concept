import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const nayoks =['Jasim', 'Salman', 'Bappi', 'Shuvo','Sakib']
  const products=[
    {name:'Photoshob', Price:'$90.99'},
    {name:'Illustator', Price:'$80.98'},
    {name:'PDF Reader', Price:'$6.99'},
    {name:'Premiere El', Price:'$250.99'},
    
  ]
  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(Nayok20 => <li>{Nayok20}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
         
        </ul>
          {
            products.map(product => <Product Product ={product}></Product>)
          }
        
        <Person2></Person2>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10); 
  const handleIncrease = () => setCount(count + 1);
    
 
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState ([])
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
     <ul>
      {
        console.log(users)
      }
      {
        users.map(user => <li>{user.phone}</li>)
      }
     </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'200px',
    float:'left'
  }
  const{name, Price} = props.Product;
  console.log(name, Price);
  return(
    <div style={productStyle}>
      <h4>{name}</h4>
      <h6>{Price}</h6>
      <button>Buy now</button>
    </div>
  )
}

function Person2(props){
  const style ={
    border:'2px solid green',
    width:'400px',
    margin:'10px'
    
  }
  return(
    <div style={style}>
      <h1>Name:{props.name}</h1>
      <p>My Profetion:{props.job}</p>
    </div>
  )
}



export default App;
