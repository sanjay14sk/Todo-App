import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { useState } from 'react';
import Searchitems from './Searchitems';
import Additems from './Additems';

function App() {
  const  [item,setItem]=useState(
  JSON.parse(localStorage.getItem('todoList')) || []
);
  const [search,setSearch]=useState('');

  const [newItem,setNewItem]=useState('');
  const addItem=(itemm)=>{
    const id=item.length?item[item.length-1].id+1:1;
    const myNewItem={id,checked:false,item:itemm};
    const listItems=[...item,myNewItem];
    setItem(listItems);
    localStorage.setItem('todoList', 
      JSON.stringify(listItems));
  }

    const handleChange = (id) => {
        const listItems = item.map((item) => item.id === id ? 
        { ...item, checked: !item.checked } : item);
        setItem(listItems);
        localStorage.setItem('todoList', 
          JSON.stringify(listItems));
    }
    const handledelete = (id) => {
      const listItems =
       item.filter((item) => item.id !== id);
      setItem(listItems);
      localStorage.setItem('todoList', 
        JSON.stringify(listItems));
  }
 const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className="App">
      <Header />
      <Additems 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <Searchitems
        search={search}
        setSearch={setSearch}
       />
      <Content
      item={item.filter(item=>((item.item).
        toLowerCase()).includes
        (search.toLowerCase() ))}
      handleChange={handleChange}
      handledelete={handledelete}
       />
      <Footer
      length={item.length} />
    </div>
  );
}

export default App;
