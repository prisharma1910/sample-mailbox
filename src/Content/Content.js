import React, { Component } from 'react';
import { default as EmailContainer } from './components/EmailContainer';
import { default as Menu } from './components/Menu';
import { ComposeMail } from '../ComposeMail';

import './Content.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { newEmail: false, menuItemToshow: 'Inbox' };
    }

    showCompose = () => {
        this.setState(prevState => {
            return {
                newEmail: !prevState.newEmail
            }
        })
    }

    updateMenuItemToshow = (item) => {
        this.setState({
            menuItemToshow: item
        })
    }

    render() {
        return (
            <div className={this.props.expanded ? 'main-container expanded' : 'main-container not-expanded'} >
                <Menu showModal={this.showCompose} updateMenuItemToshow={this.updateMenuItemToshow} />
                <EmailContainer userId={this.props.userId} menuItemToshow={this.state.menuItemToshow} updateNewMailsCount={this.props.updateNewMailsCount} />
                {this.state.newEmail ? <ComposeMail toggleCompose={this.showCompose} userId={this.props.userId} /> : null}
            </div>
        );
    }
}

export default Content;
