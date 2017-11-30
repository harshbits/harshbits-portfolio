/*
    Title: leftDrawer.js
    Version: 1.0.0
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import './chatbox.css';
import ChatBot from 'react-simple-chatbot';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    }
    render() {
      return (
        <ChatBot
          headerTitle="Speech Recognition"
          recognitionEnable={true}
          steps={[
            {
              id: '1',
              message: 'What is your name?',
              trigger: '2',
            },
            {
              id: '2',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}, nice to meet you!',
              end: true,
            },
          ]}
        />
      );
    }
}
export default ChatBox;
