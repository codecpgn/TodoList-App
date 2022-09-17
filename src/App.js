import React, { useState } from 'react'
import toDolist from './toDolist';
import './index.css'

const App = () => {

const [inputList, setInputList] =useState("Buy a pen");
const [Items, setItems] = useState([]);


const itemsEvent = (event) =>{
setInputList(event.target.value);
}

const listOfItems = () =>{
setItems((oldItems) => {
  return[...oldItems, inputList];
});
setInputList('');
}

  return (
    <div className='main_div'>
    <div className='center_div'>
    <br/>
    <h1>Todo List</h1>
    <br/>
    <input type="text" placeholder='Add a Items' 
    value={inputList}
     onChange={itemsEvent}/>
    <button onClick={listOfItems}>+</button>

    <ol>
      {/*<li>{inputList}</li>*/}
     {Items.map((itemval,index) => {
      return <toDolist key ={index} text = {itemval}/>;
     })}
    </ol>
    </div>
    </div>
  );
};

export default App;