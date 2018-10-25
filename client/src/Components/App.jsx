import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import ChatBox from './ChatBox.jsx';
import Messages from './Messages.jsx';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const DUMMY_DATA = [
  {
    senderId: 'perborgen',
    text: "who'll win?"
  },
  {
    senderId: 'janedoe',
    text: "who'll win?"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: '',
      conversation: [],
      messages: DUMMY_DATA
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('Handle Change!');
    this.setState({
      userMessage: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Message', this.state.userMessage);
    console.log('Input!');
  }

  render() {
    return (
      <div>
        <h1>Sam Chat Bot</h1>
        <Messages messages={this.state.messages} />
        <ChatBox
          userMessage={this.state.userMessage}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Button primary={this.props.primary}>Hello</Button>
      </div>
    );
  }
}

export default App;
