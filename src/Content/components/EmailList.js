import React, { Component } from 'react';

class EmailList extends Component {
  render() {
    const { subject, attachment, time, from, read } = this.props.content;
    let classForText = !read ? 'bold' : '';
    return (      <tr>
        <td><input type="checkbox" className="checkbox-custom" checked={this.props.checked} onChange={this.props.onSelection}/></td>
        <td onClick={this.props.updateStatus}><span className={classForText}> {from} </span></td>
        <td onClick={this.props.updateStatus}><span className={classForText}> {subject} </span></td>
        <td onClick={this.props.updateStatus}><span className={classForText}> {attachment ? <i className="fa fa-paperclip"></i> : null}</span></td>
        <td onClick={this.props.updateStatus}><span className={classForText}>{time}</span></td>
      </tr>
    );
  }
}

export default EmailList;
