import React from 'react'

const Searchitems = ({ search, setSearch }) => {
  return (
    <form className='searchform' 
    onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='searchitem'>Search Item</label>
        <input
            type='text'
            id='searchitem'
            placeholder='Search items...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}
export default Searchitems
