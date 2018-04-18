import React, { Component } from 'react'
import Input from '../Input/Input'
import UserDisplay from '../UserDisplay/UserDisplay'
import UserGithubDetails from '../UserGithubDetails/UserGithubDetails'

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
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('user submitted', this.state.username)
    this.setState({username: e.target.value})
  }

  handleChange(e) {
    // console.log('user input', e.target.value)
    this.setState({username: e.target.value})
  }

  render() {
    return (
      <div style={cardStyle}>
        <Input
          name={this.state.username}
          change={this.handleChange}
          submit={this.handleSubmit}
        />
        <UserDisplay />
        <UserGithubDetails />
      </div>
    )
  }
}

export default Card
