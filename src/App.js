import React from 'react';
import { withRouter } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import RoutingContainer from './RoutingContainer';

class App extends React.Component {

  componentDidMount() {
    const users = { 'abc@gmail.com': 'abc123', 'xyz@gmail.com': 'xyz123' };
    const emails = {
      'abc@gmail.com': {
        999999: { subject: 'play games', attachment: false, time: "6:10", read: false, from: 'Shubham', text: 'Hi Lets see email' },
        8888888: { subject: 'estimate meet', attachment: true, time: "23:10", read: false, from: 'Heena', text: 'Nice to meet you' },
        7777777: { subject: 'video url', attachment: false, time: "8:10", read: false, from: 'Saurabh S', text: 'Hello welcome to email' },
        666666: { subject: 'see you', attachment: false, time: "19:10", read: true, from: 'Priya M', text: 'Hello welcome to email' }
      }
      , 'xyz@gmail.com': {}
    };
    const sent = {
      'abc@gmail.com': {}
      , 'xyz@gmail.com': {}
    };
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('emails', JSON.stringify(emails));
    localStorage.setItem('sent', JSON.stringify(sent));
  }

  render() {
    return (
        <RoutingContainer />
    );
  }
}

export default withRouter(App);