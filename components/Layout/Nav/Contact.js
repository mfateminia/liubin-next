import React from 'react';
import { observer, inject } from 'mobx-react';

class Contact extends React.Component{

    render(){
        return (
            <div className = '-contact-wrapper'>
            <a className = "-contact-close" onClick = {this.props.store.showContact.bind(this, false)}></a>
            <p className = '-contact-header'>Feel free to contact us on:</p>
                <p className = '-contact-item'>
                    <i className="-contact-icon fas fa-envelope"></i>
                    cheliub@nus.edu.sg
                </p>
                <p className = '-contact-item'>
                    <i className="-contact-icon fas fa-phone"></i>
                    +65 6516 8049
                </p>	
                <p className = '-contact-item'>
                    <i className="-contact-icon fas fa-fax -icon"></i>
                    +65 6779 1936
                </p>
                <p className = '-contact-address'>
                    <p className = '-contact-header'>Where are we?</p>
                    <p className = '-contact-address-body'> National University of Singapore,
                        Department of Chemical and Biomolecular Engineering, 
                        4 Engineering Drive 4, Blk E5 #02-17,
                        Singapore 117585 
                    </p>
                </p>
            </div>
        );
    }
}

export default inject('store')(observer(Contact));