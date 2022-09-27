import React from 'react'

import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Todolist = () => {
  return (
    <>
      <div className='main_div'>
      <div className='center_div'>
      <br/>
      <h1>ToDO List</h1>
      <br/>

      <input type='text' placeholder='add an item'/>
      <Button className='newBtn'>
        <AddCircleIcon/>
      </Button>
      </div>
      </div>
    </>
  );
};
export default Todolist;
