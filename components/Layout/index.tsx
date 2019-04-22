import React, { PureComponent, Fragment } from 'react';
import { Provider } from 'mobx-react';
import Store from '../../Store/store';
import Nav from './Nav';
import Footer from './Footer';
import Head from 'next/head';

export default class Layout extends PureComponent {
    render() {
        return (
            <Provider store={Store}>
                <Fragment>
                    <Head>
                        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
                    </Head>
                    <Nav />
                    {this.props.children}
                    <Footer />
                </Fragment>
            </Provider>);
    }
}