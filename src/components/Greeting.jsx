import React, {useState,useRef} from 'react'
const Greeting = () => {
  const ActiveInput = useState(false);
  const[inputValue, setInputValue] = useState('');
  const HandleInputChange =(event) => {
    setInputValue(event.target.value);
  }
  const[items, setItems] = useState([]);
  const addToList = () =>{
    setItems([...items,{id:Date.now(),value: inputValue}]);
    setInputValue('');
  }
  const deleteFromlist = (id) =>{
    setItems(items.filter((item) =>item.id !== id));
  }
  return (
    <div className='header header__container'>
      <div className='header__content header__padding'>
      <input
          value={inputValue}
          onChange={HandleInputChange}
          className="input is-success"
          type="text"
          placeholder="Success input"
        />
      <button className="button is-primary is-light"
     onClick={addToList}
      >Add</button>
      </div>
      <div className='header__block'>
        <ul >
          {items.map((item)=>(
          <li key={item.id}>{item.value}  <button onClick={() =>deleteFromlist(item.id)} className="button is-danger is-light">Delete</button></li>
          ))}
            
        </ul>
      </div>
    </div>
  )
}

export default Greeting
import '../assets/css/style.scss';
import { use } from 'react';
