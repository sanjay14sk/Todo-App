
import ItemList from "./ItemList";
const Content = ({ item, handleChange, handledelete }) => {
  
  return (
   <main>
    {item.length ? (
      <ItemList
      item={item}
      handleChange={handleChange}
      handledelete={handledelete}
       />
    ) : (
      <p style={{marginTop:'2rem'}}>Your list is empty.</p>
    )}
   </main>
  )
}

export default Content
