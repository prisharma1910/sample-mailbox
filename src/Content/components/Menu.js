import React, { Component } from 'react';

class Menu extends Component {

  render() {
    return (
      <div className="menu">
        <button className="compose_button" onClick={this.props.showModal}>Compose Mail</button>
        <label className="menu-ul-headers">FOLDERS</label>
        <ul>
          <li className="menu-clickable" onClick={() => this.props.updateMenuItemToshow('Inbox')}>Inbox</li>
          <li className="menu-clickable" onClick={() => this.props.updateMenuItemToshow('Sent')}>Send email</li>
          <li>important</li>
          <li>drafts</li>
          <li>trash</li>
        </ul>
        <label className="menu-ul-headers">CATEGORIES</label>
        <ul>
          <li><i className="fa fa-circle one"></i>Work</li>
          <li><i className="fa fa-circle two"></i>Documents</li>
          <li><i className="fa fa-circle three" ></i>Social</li>
          <li><i className="fa fa-circle four"></i>Advertising</li>
          <li><i className="fa fa-circle five"></i>Clients</li>
        </ul>
        <label className="menu-ul-headers">LABELS</label>
        <ul className="bullet-container">
          <li className="menu-bullets"><i className="fa fa-tag"></i>family</li>
          <li className="menu-bullets"><i className="fa fa-tag"></i>work</li>
          <li className="menu-bullets"><i className="fa fa-tag"></i>home</li>
          <li className="menu-bullets"><i className="fa fa-tag"></i>children</li>
          <li className="menu-bullets"><i className="fa fa-tag"></i>holidays</li>
          <li className="menu-bullets"><i className="fa fa-tag"></i>music</li>
          <li className="menu-bullets"><i className="fa fa-tag"></i>photography</li>
          <li className="menu-bullets"><i className="fa fa-tag"></i>film</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
