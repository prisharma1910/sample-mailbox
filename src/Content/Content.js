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
        const {userId, updateNewMailsCount} = this.props;
        const {menuItemToshow, newEmail} = this.state;
        return (
            <div className={this.props.expanded ? 'main-container expanded' : 'main-container not-expanded'} >
                <Menu showModal={this.showCompose} updateMenuItemToshow={this.updateMenuItemToshow} menuItemToshow={menuItemToshow}/>
                <EmailContainer userId={userId} menuItemToshow={menuItemToshow} updateNewMailsCount={updateNewMailsCount} />
                {newEmail ? <ComposeMail toggleCompose={this.showCompose} userId={userId} /> : null}
            </div>
        );
    }
}

export default Content;
