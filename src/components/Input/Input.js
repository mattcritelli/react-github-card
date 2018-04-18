import React, { Component } from 'react'

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

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let { userInput } = { ...this.state }
    userInput = e.target.value
    this.setState(prevState => {
      return {userInput}
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.submit(e, this.state.userInput)}>
        <input
          style={inputStyle}
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Input
