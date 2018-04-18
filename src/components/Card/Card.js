import React, { Component } from 'react'
import Input from '../Input/Input'
import UserDisplay from '../UserDisplay/UserDisplay'
import UserGithubDetails from '../UserGithubDetails/UserGithubDetails'
import axios from 'axios'

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

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e, username) {
    e.preventDefault()
    this.setState({username})
  }

  componentDidUpdate() {
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(response => {
      console.log('response?', response)
    })
  }

  render() {
    return (
      <div style={cardStyle}>
        <Input
          name={this.state.username}
          submit={this.handleSubmit}
        />
        <UserDisplay />
        <UserGithubDetails />
      </div>
    )
  }
}

export default Card
