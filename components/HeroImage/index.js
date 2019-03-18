import React from 'react';
import { ScrollToTop } from '../utils'

const HeroImage = () => {
    ScrollToTop();
    return (
        <div id = '-hero-image-top' className = '-hero-image-outer-wrapper'>
            <div className = '-hero-image-inner-wrapper'>
                <div className = '-hero-image-image-wrapper'>
                        <img className = '-hero-image-image' src = 'static/img/hero_image.jpg' alt = 'not found!' />
                        <div className = '-hero-image-overlay'></div>
                </div>

                <div className ="-hero-image-text-wrapper container-fluid">
                    <h1 id = '-hero-image-heading'>Liu's Research Group</h1>
                    <p id = '-hero-image-parag'>where Chemistry, Materials, and Biology meet to create unique nanoprobes for theranostic applications</p>
                </div>
                <a className = '-hero-image-button' href='#research'>
                        <i className="fas fa-angle-double-down -hero-image-icon"></i>
                </a>
            </div>
        </div>
    );  
}

export default HeroImage;