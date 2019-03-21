import React from 'react';
import { observer, inject } from 'mobx-react';
import Contact from './Contact';

class Nav extends React.Component {

    handleContact = () => {
        if(this.props.store.isContactVisible){
            return <Contact />
        }
        else return null;
    }

    onClick = (e) => {
        e.preventDefault();
        console.log(e)
    }

    render(){
        return(
            <div className='-nav-wrapper'>
                {this.handleContact()}
                <div className = '-nav-brand'>
                    <img src = 'static/img/logo.png' alt = 'not found!'/>
                </div>

                <a href="" className = '-nav-icon' onClick = {e => this.props.store.toggleNav(e)}>
                    <i className = "fa fa-bars"></i>
                </a>
                {this.handleNav}
                <div className = {this.props.store.navTogglerVisible? '-nav-inner-wrapper -nav-toggler' : '-nav-inner-wrapper'}>
                        <a href="#" name="home" className = '-nav-link' onClick={this.onClick}>HOME</a>
                        <a href="#" name="publication" className = '-nav-link' onClick = {this.props.store.closeToggler}>PUBLICATIONS</a>
                        <a href="#" name="people" className = '-nav-link' onClick = {this.props.store.closeToggler}>PEOPLE</a>
                        <a  href="#" name="contact" className = '-nav-link' onClick = {this.props.store.showContact.bind(this, true)}>CONTACT</a>
                </div>
            </div>
        );
    }
}

export default inject('store')(observer(Nav));