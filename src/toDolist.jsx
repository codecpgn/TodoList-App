import React, { useState } from 'react'
import './index.css'
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListComp from './ListComp';
const Todolist = () => {

const [item,setItem] = useState();
const [newitem, setNewItem] = useState([]);
const itemEvent = (event) =>{
setItem(event.target.value);
}

const listofItems = () =>{
  setNewItem((prevValue) => {
return [...prevValue, item];
  });
  setItem(" ");
};

  return (
    <>
      <div className='main_div'>
      <div className='center_div'>
      <br/>
      <h1>ToDO List</h1>
      <br/>
      <input type='text' value={item}
      placeholder='add an items' onChange={itemEvent}/>
      <Button className='newBtn' onClick={listofItems}>
        <AddCircleIcon/>
      </Button>
      <br/>
      <ol>
        {newitem.map((val,index) =>{
          return <ListComp key ={index} text={val}/>;
        })}
      </ol>
      <br/>
      </div>
      </div>
    </>
  );
};
export default Todolist;
