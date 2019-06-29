import React, { Fragment } from 'react';
import { Provider } from 'mobx-react';
import { Nav } from './Nav';
import { Footer } from './Footer';
import Head from 'next/head';

interface ILayoutProps {
    children: JSX.Element | JSX.Element[];
}

const Layout = (props: ILayoutProps) => {
        return (
            <Provider>
                <Fragment>
                    <Head>
                        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
                    </Head>
                    <Nav />
                    {props.children}
                    <Footer />
                </Fragment>
            </Provider>);
};

export default Layout;