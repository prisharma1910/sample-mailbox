import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar";
import { Content } from '../Content';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { userId: null, expanded: false, newMails: 0 };
  }

  componentDidMount() {
    let userId = localStorage.getItem('loggedInUser');
    if (userId === 'null') {
      this.props.history.push('/login');
    } else {
      this.setState({
        userId
      }, this.updateNewMails)
    }
  }

  fetchCount = () => {
    let allData = JSON.parse(localStorage.getItem('emails'));
    const data = this.state.userId ? allData[this.state.userId] : {};
    let unread = 0;
    Object.keys(data).forEach((id)=> {
      if (!data[id].read) {
        unread++;
      }
    });
    return unread;
  }

  updateNewMails = () => {
    this.setState({
      newMails: this.fetchCount()
    })
  }

  onToggle = () => {
    this.setState(prevState => {
      return {
        expanded: !prevState.expanded
      }
    });
  };

  logOut = () => {
    this.setState({
      userId: null
    });
    this.props.history.push('/login');
  }

  render() {
    const { userId, expanded, newMails } = this.state;
    if (userId) {
      return (
        <div className="dash-container">
          <div className="nav-bar"><SideBar expanded={expanded} /></div>
          <div className="content-container">
            <div className="search">
              <button onClick={this.onToggle} className="nav-btn">
              <i className="fa fa-bars"></i>
              </button>
              <input type="text" className="searchTerm" placeholder="What are you looking for?" />
              <div className="btn-container">
              <button type="submit" className="messageButton">
                <i className="fa fa-envelope"></i><sup>{newMails}</sup>
              </button>
              <button type="submit" className="bellButton">
                <i className="fa fa-bell"></i>
              </button>
              <button type="submit" className="logOutButton" onClick={this.logOut}>
                <i className="fa fa-sign-out "></i>Log out
              </button>
              </div>
            </div>
          <Content userId={userId} expanded={expanded} updateNewMailsCount={this.updateNewMails}/>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Dashboard;
