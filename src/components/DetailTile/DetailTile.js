import React from 'react'
// import './DetailTile.css'

const detailTileStyle = {
  height: '125px',
  width: '125px',
  backgroundColor: 'yellow',
  margin: '5px',
  display: 'flex',
  flexDirection: 'column'
}


const DetailTile = () => {
  return (
    <div style={detailTileStyle}>
      <p>Hi</p>
    </div>
  )
}

export default DetailTile
