import React, { Component } from 'react';
import './ComposeMail.css';

class ComposeMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '',
      cc: '',
      subject: '',
      text: ''
    }
  }

  updateTo = (e) => {
    this.setState({
      to: e.currentTarget.value
    })
  }

  updateCc = (e) => {
    this.setState({
      cc: e.currentTarget.value
    })
  }

  updateSubject = (e) => {
    this.setState({
      subject: e.currentTarget.value
    })
  }

  updateText = (e) => {
    this.setState({
      text: e.currentTarget.value
    })
  }

  sendMail = () => {
    const { to, cc, subject, text } = this.state;
    const userId = this.props.userId;
    if (!to) {
      alert('email id is required');
      return;
    }
    let allData = JSON.parse(localStorage.getItem('emails'));
    let sentData = JSON.parse(localStorage.getItem('sent'));

    if (allData[to]) {
      allData[to][Math.floor((Math.random() * 1000) + 1)] = { subject, attachment: false, time: new Date().getUTCHours() + ':' + new Date().getUTCMinutes(), read: false, from: userId.slice(0, userId.indexOf('@')), text }
    }
    if (cc && allData[cc]) {
      allData[cc][Math.floor((Math.random() * 1000) + 1)] = { subject, attachment: false, time: new Date().getUTCHours() + ':' + new Date().getUTCMinutes(), read: false, from: userId.slice(0, userId.indexOf('@')), text }
    }

    sentData[this.props.userId][Math.floor((Math.random() * 1000) + 1)] = { subject, attachment: false, time: new Date().getUTCHours() + ':' + new Date().getUTCMinutes(), read: false, from: to.slice(0, userId.indexOf('@')), text }
    localStorage.setItem('emails', JSON.stringify(allData));
    localStorage.setItem('sent', JSON.stringify(sentData));
    this.props.toggleCompose();
  }

  render() {
    return (
      <div className="compose">
        <h2>Compose Email</h2>
        <span>
          <label>To : </label><input name='to' value={this.state.to} onChange={this.updateTo} />
        </span>
        <span><label>Cc : </label><input name='cc' value={this.state.cc} onChange={this.updateCc} /></span>
        <span><label>Subject : </label><input name='subject' value={this.state.subject} onChange={this.updateSubject} /></span>
        <span><label>Text : </label><input name='text' value={this.state.text} onChange={this.updateText} /></span>
        <span>
          <button onClick={this.sendMail}> Send Email</button>
          <button onClick={this.props.toggleCompose}> Cancel</button>
        </span>
      </div>
    );
  }
}

export default ComposeMail;
