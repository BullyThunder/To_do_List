import React, {useState,useRef} from 'react'
const Greeting = () => {
  const[inputValue, setInputValue] = useState('');
  const HandleInputChange =(event) => {
    setInputValue(event.target.value);
  }
  const [isDisabled, setIsDisabled] = useState(false);
  const [IsThrough,setIsActive] = useState(false);
  const[items, setItems] = useState(()=>{
    try{
    const saved_items = (localStorage.getItem("to_do"));
    return saved_items ? JSON.parse(saved_items) : [];
    }
    catch(e){
     console.log(`Error${e}`);
     return [];
    }
    });
  const addToList = () =>{
    const change_arr = [...items, {id: Date.now(),value:inputValue,checkTemp:false, IsThrough:false}];
    setItems(change_arr);
    setInputValue('');
    saveToLocalStorage(change_arr);
  }
  const deleteFromlist = (id) =>{
  const del_arr = (items.filter((item) =>item.id !== id));
   setItems(del_arr);
   saveToLocalStorage(del_arr);
  }
  const check_Change = (id,) =>{
    const check_arr = items.map((item)=>
    item.id === id ? {...item, checkTemp: !item.checkTemp, IsThrough: !item.IsThrough} : item);
    setItems(check_arr);
    saveToLocalStorage(check_arr);
  }
  const saveToLocalStorage =(data) =>{
   return localStorage.setItem("to_do",JSON.stringify(data));
  }
  return (
    <div className='header header__container'>
      <div className='header__content header__padding'>
        <div className='header__top'>
      <input
          value={inputValue}
          onChange={HandleInputChange}
          className="input is-success"
          type="text"
          placeholder="Success input"
        />
      <button className="button is-primary is-light"
      disabled={!inputValue.trim()}
     onClick={addToList}
      >Add</button>
      </div>
      <div className='header__block'>
        <ul>
          {items.map((item)=>{ 
         return <li 
         key={item.id}
         className={item.IsThrough ? 'activeClass' : 'noneClass'}
         >

          <input
          type='checkbox'
          checked={item.checkTemp}
          onChange={() =>check_Change(item.id)}
          /> {item.value}  
          <button 
           onClick={() =>deleteFromlist(item.id)} 
          className="button is-danger is-light">Delete</button></li>
          })}
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Greeting
import '../assets/css/style.scss';
import { use } from 'react';
