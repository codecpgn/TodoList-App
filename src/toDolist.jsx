import React, { useState } from 'react'
import './index.css'
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Todolist = () => {

const [item,setItem] = useState(false);
const [newitem, setNewItem] = useState([]);
const itemEvent = (event) =>{
setItem(event.target.value);
}

const listofItems = () =>{
  setNewItem((prevValue) => {
return [...prevValue, item];
  })
};

  return (
    <>
      <div className='main_div'>
      <div className='center_div'>
      <br/>
      <h1>ToDO List</h1>
      <br/>

      <input type='text' placeholder='add an items' onChange={itemEvent}/>
      <Button className='newBtn' onClick={listofItems}>
        <AddCircleIcon/>
      </Button>
      <br/>
      <ol>
        

        {newitem.map((val) =>{
          return <li>{val}</li>;
        })}
      </ol>
      <br/>
      </div>
      </div>
    </>
  );
};
export default Todolist;
