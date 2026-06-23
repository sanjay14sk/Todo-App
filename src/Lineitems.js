import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const Lineitems = ({ item, handleChange, handledelete }) => {
  return (
    <li className='item' key={item.id}>
            <input type='checkbox' 
            onChange={()=>handleChange(item.id)}
            checked={item.checked} />
          <label
          style={(item.checked)?{textDecoration:'line-through'}
          :null}
          onDoubleClick={()=>handleChange(item.id)}
            checked={item.checked}>{item.item}</label>
          <FaTrashAlt 
          onClick={()=>handledelete(item.id)}
            role="button"
             tab="0"
             aria-label={`delete ${item.item}`}
           />
          </li>
  )
}

export default Lineitems
