import React from 'react'
import Input from '../Input/Input'
import UserDisplay from '../UserDisplay/UserDisplay'
import UserDetail from '../UserDetail/UserDetail'



const cardStyle = {
  backgroundColor: 'yellow',
  height: '600px',
  width: '500px',
  margin: '50px auto',
  border: '2px solid #eee',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column'
}

const Card = () => {
  return (
    <div style={cardStyle}>
      <Input />
      <UserDisplay />
      <UserDetail />
    </div>
  )
}

export default Card
