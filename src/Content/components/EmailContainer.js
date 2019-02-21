import React, { Component } from 'react';
import { default as EmailList } from './EmailList';

class EmailContainer extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [], selected: [] }
  }

  componentDidMount() {
    this.refreshData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.menuItemToshow !== prevProps.menuItemToshow) {
      this.refreshData();
    }
  }

  fetchData = () => {
    let dataToFetch = this.props.menuItemToshow === 'Inbox' ? 'emails' : 'sent';
    return JSON.parse(localStorage.getItem(dataToFetch));
  }

  setData = (allData) => {
    localStorage.setItem('emails', JSON.stringify(allData));
    this.refreshData();
  }

  onSelection = (i) => {
    let newSelection = this.state.selected;
    if (newSelection.indexOf(i) > -1) {
      let id = this.state.selected.indexOf(i);
      newSelection.splice(id, 1);
    } else {
      newSelection.push(i);
    }
    this.setState({
      selected: newSelection
    })
  }

  onDelete = () => {
    const allData = this.fetchData();
    let data = allData[this.props.userId];
    if (Object.keys(data).length < 1) {
      return;
    }
    this.state.selected.forEach(id => {
      delete data[id];
    });
    this.setData(allData);
    this.props.updateNewMailsCount();
  }

  refreshData = () => {
    const allData = this.fetchData();
    const data = allData[this.props.userId];
    this.setState({
      data
    })
  }

  updateEmailStatus = (id) => {
    if (this.props.menuItemToshow === 'Inbox') {
      let allData = this.fetchData();
      allData[this.props.userId][id].read = true;
      this.setData(allData);
      this.props.updateNewMailsCount();
    }
  }

  render() {
    let emaildata = [];
    const { data, selected } = this.state;
    let unread = 0;

    Object.keys(data).forEach((id) => {
      emaildata.push(<EmailList key={id} content={data[id]} updateStatus={() => this.updateEmailStatus(id)} onSelection={() => this.onSelection(id)} checked={selected.indexOf(id) > -1 ? true : false} />);
      if (!data[id].read) {
        unread++;
      }
    });

    return (
      <div className="email-list">
        <div className="email-header">
          <span className="email-list-title">{this.props.menuItemToshow} {unread > 0 ? `( ${unread} )` : ''}  </span>
          <div className="email-search">
            <input placeholder='search email' />
            <button > search</button>
          </div>
        </div>
        <div className="email-sub-header">
          <button className="menu-clickable" onClick={this.refreshData} title="refresh"> <i className="fa fa-refresh" ></i>Refresh</button>
          <button > <i className="fa fa-info"></i></button>
          <button > <i className="fa fa-exclamation"></i></button>
          <button className="menu-clickable" onClick={this.onDelete} title="delete"> <i className="fa fa-archive"></i></button>
          <div className="email-move-btn">
            <button > <i className="fa fa-arrow-left"></i></button>
            <button > <i className="fa fa-arrow-right"></i></button>
          </div>
        </div>
        <div>
          <table>
            <tbody>
              {emaildata}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default EmailContainer;
