import React from 'react';
import FeaturedPapersAPI from './API/featured-papers.json';
import { IFeaturedPublication } from '../models.js';

export const FeaturedPapers: React.FunctionComponent = () => {
    return (
        <div className="-card-wrapper container clearfix">
            {FeaturedPapersAPI.map((paper: IFeaturedPublication) => {
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
};
