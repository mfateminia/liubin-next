import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'mobx-react';
import Store from '../../Store/store';
import Nav from './Nav';
import Footer from './Footer';

export default class Layout extends PureComponent{
    render() {
        return (
            <Provider store={Store}>
                <Fragment>
                    <Nav />
                        {this.props.children}
                    <Footer />
                </Fragment>
            </Provider>);
    }
}