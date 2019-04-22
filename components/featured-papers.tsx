import React from 'react';
import FeaturedPapersAPI from './API/featured-papers.json';

const HorizCard: React.FunctionComponent = () => {
    return (
        <div className="-card-wrapper container clearfix">
            {FeaturedPapersAPI.map((paper: any) => {
                return (
                    <a key={paper.title} href={paper.url} target="_blank">
                        <div className="-card-inner-wrapper">
                            <div className="-card-body">
                                <div className="-card-title-wrapper">
                                    <p className="-card-title font-weight-bold">
                                        {paper.title}
                                    </p>
                                    <p className="-card-subtitle font-italic">
                                        {paper.subtitle}
                                    </p>
                                </div>

                                <p className="-card-text">
                                    {paper.text}
                                </p>
                            </div>
                        </div>
                    </a>
                )
            })}
        </div>
    );
}

export default HorizCard;