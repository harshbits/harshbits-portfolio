/*
    Title: chatbox.jsx
    Version: 1.0.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import {render} from 'react-dom'
import './chatbox.css';
import {Launcher} from 'react-chat-window';

class ChatBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
       messageList: props.messageHistory || []
    };
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  render() {
    return (
      <div>
      <Launcher
        agentProfile={{
          teamName: 'Eunice - Project UBot',
          imageUrl: '/ubot.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
      />
    </div>);
  }
}
export default ChatBox;
