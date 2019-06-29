import React from 'react';
import ResearchAreas from './API/ResearchAreas.json';
import { IResearchArea } from '../models.js';

export const Research = () => {
    return (
        <div className="-research-outer-wrapper row">
            {
                ResearchAreas.map((item: IResearchArea, index: number) => {
                    return (
                        <div key={index} className="col-12 col-sm-6 col-xl-3">
                            <div className="card">
                                <img className="card-img-top" src={`static/img/research/${item.image}`} alt="Not found!"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{item.header}</h5>
                                </div>
                                <button type="button" className="btn btn-lg -research-read-btn" data-toggle="modal" data-target={`#research-modal-${index}`}>Read More</button>

                            </div>
                            <div className="modal fade" id={`research-modal-${index}`} role="dialog">
                                <div className="modal-dialog">

                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            <h4 className="modal-title">{item.header}</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p>{item.content}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};
