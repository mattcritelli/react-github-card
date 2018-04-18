import React from 'react'

const inputStyle = {
  height: '50px',
  width: '490px',
  margin: '5px',
  backgroundColor: '#eee',
  border: 'none',
  textAlign: 'center',
  padding: '0',
  boxSizing: 'border-box'
}

const Input = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        style={inputStyle}
        type="text"
        value={props.username}
        onChange={props.change}
        placeholder="Type Username + Enter"
      />
    </form>
  )
}

export default Input
