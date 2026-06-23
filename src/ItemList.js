import React from 'react'
import Lineitems from './Lineitems';
const ItemList = ({ item, handleChange, handledelete }) => {
  return (
   <ul>
        {item.map((item)=>(
        <Lineitems
        item={item}
        key={item.id}
        handleChange={handleChange}
        handledelete={handledelete}
         />
        ))}
        </ul>
  )
}

export default ItemList
