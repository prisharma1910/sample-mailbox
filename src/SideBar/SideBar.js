import React, { Component } from 'react';
import './SideBar.css';

class SideBar extends Component {
  render() {
    const { expanded } = this.props;

    return (
      <div>
        <nav>
          <ul className="nav-container">
            <li>
              {expanded ?
              <div className="profile-sec"><img src="https://www.w3schools.com/images/picture.jpg" alt="loading..." height="42" width="42"/><span><b>Priyanka Sharma</b></span><span>S/w Developer</span></div>
              :<span className='text'>IN+</span>}
            </li>
            <li><i className="fa fa-th-large"></i>{expanded ? <span>Dashboards</span> : null}</li>
            <li><i className="fa fa-diamond"></i> {expanded ? <span>Layouts</span> : null}</li>
            <li><i className="fa fa-bar-chart"></i>{expanded ? <span>Graphs</span> : null}</li>
            <li className="selected"><i className="fa fa-envelope"></i>{expanded ? <React.Fragment>
              <span>Mail Box</span>
              <ul>
                <li>Inbox</li>
                <li>Email View</li>
                <li>Compose Email</li>
                <li>Email Template</li>
              </ul>
              </React.Fragment> : null}</li>
            <li><i className="fa fa-pie-chart"></i>{expanded ? <span>Metrics</span> : null}</li>
            <li><i className="fa fa-magic"></i>{expanded ? <span>Widgets</span> : null}</li>
            <li><i className="fa fa-wpforms"></i>{expanded ? <span>Forms</span> : null}</li>
            <li><i className="fa fa-desktop"></i>{expanded ? <span>App view</span> : null}</li>
          </ul>
        </nav>
      </div>

    );
  }
}

export default SideBar;
