import React from 'react'
import DetailTile from '../DetailTile/DetailTile'

const userGithubDetailsStyle = {
    height: '200px',
    margin: '5px',
    backgroundColor: '#1E508D',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const UserGithubDetails = () => {
  return (
    <div style={userGithubDetailsStyle}>
      <DetailTile />
      <DetailTile />
      <DetailTile />
    </div>
  )
}

export default UserGithubDetails
