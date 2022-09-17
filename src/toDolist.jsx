import React from 'react';
const toDolist = (props) => {

  const deleteItems = () =>{
    console.log("deleted");
  }
  return(
    <>
    <div className='todo_style'>
    <i class="fa fa-times" aria-hidden="true"onClick={deleteItems}/>
    <li>{props.text}</li>
    </div>
    </>
  );
};
export default toDolist;
