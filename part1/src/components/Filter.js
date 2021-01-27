import React from 'react'

const Filter = ({ onchange }) => {
  return (
    <div>
      filer shown with<input 
        onChange={onchange}
      />
    </div>
    
  )
}

export default Filter