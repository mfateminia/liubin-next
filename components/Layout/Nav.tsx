import React, { useState, MouseEvent } from 'react';
import Router from 'next/router';

export const Nav: React.FunctionComponent = () => {

    const [isHamburgerMenuOpen, setIsHamburgetMenuOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const onMenuItemClick = (e: MouseEvent) => {
        e.preventDefault();
        setIsHamburgetMenuOpen(false);
        Router.push(`/${e.target.name}`);
    };

    const onHamburgerIconClick = (e: MouseEvent) => {
        e.preventDefault();
        setIsHamburgetMenuOpen(!isHamburgerMenuOpen);
    };

    const onContactClick = (e: MouseEvent) => {
        e.preventDefault();
        setIsHamburgetMenuOpen(false);
        setIsContactOpen(!isContactOpen);
    };

    const closeContact = () => {
        setIsContactOpen(false);
    };

    const getContact = () => {
        return (
            <div className="-contact-wrapper">
                <a className="-contact-close" onClick={closeContact}></a>
                <p className="-contact-header">Feel free to contact us on:</p>
                <p className="-contact-item">
                    <i className="-contact-icon fas fa-envelope"></i>
                    cheliub@nus.edu.sg
                </p>
                <p className="-contact-item">
                    <i className="-contact-icon fas fa-phone"></i>
                    +65 6516 8049
                </p>
                <p className="-contact-item">
                    <i className="-contact-icon fas fa-fax -icon"></i>
                    +65 6779 1936
                </p>
                <div className="-contact-address">
                    <p className="-contact-header">Where are we?</p>
                    <p className="-contact-address-body"> National University of Singapore,
                        Department of Chemical and Biomolecular Engineering,
                        4 Engineering Drive 4, Blk E5 #02-17,
                        Singapore 117585
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="-nav-wrapper">
            {isContactOpen && getContact()}
            <div className="-nav-brand">
                <img src="static/img/logo.png" alt="not found!" />
            </div>

            <a href="" className="-nav-icon" onClick={onHamburgerIconClick}>
                <i className="fa fa-bars"></i>
            </a>

            <div className={isHamburgerMenuOpen ? "-nav-inner-wrapper -nav-toggler" : "-nav-inner-wrapper"}>
                <a href="#" name="index" className="-nav-link" onClick={onMenuItemClick}>HOME</a>
                <a href="#" name="publication" className="-nav-link" onClick={onMenuItemClick}>PUBLICATIONS</a>
                <a href="#" name="people" className="-nav-link" onClick={onMenuItemClick}>PEOPLE</a>
                <a href="#" name="contact" className="-nav-link" onClick={onContactClick}>CONTACT</a>
            </div>
        </div>
    );

};