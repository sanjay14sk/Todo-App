import React from 'react'

const footer = ({ length }) => {
    const year = new Date();
  return (
     <footer>Number of Todos {length} </footer>
  )
}

export default footer