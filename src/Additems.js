import React from 'react'

import {  FaPlus  } from "react-icons/fa";
const Additems = ({ newItem, setNewItem, handleSubmit }) => {
  return (
   <form className='addform' onSubmit={handleSubmit}>
    <label  htmlFor='additem'>
        Add Item
    </label>
    <input
    type='text'
    id='additem'
    placeholder='Add Item'
    autoFocus
    required
    value={newItem}
    onChange={(e) => setNewItem(e.target.value)}
    />
    <button type='submit' aria-label='Add Item'>
       <FaPlus />
    </button>
   </form>
  )
}

export default Additems
