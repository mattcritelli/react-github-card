import React from 'react'

const inputStyle = {
  height: '50px',
  margin: '5px',
  backgroundColor: '#eee',
  border: 'none',
  textAlign: 'center'
}

const Input = () => {
  return (
    <input
      style={inputStyle}
      type="text"
      value="Type Username + Enter" />
  )
}

export default Input
