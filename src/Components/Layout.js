import React, { Fragment } from 'react'
import Header from './Header';
import Footer from './Footer';
import Leftsidebar from './Leftsidebar';
const Layout = ({ children }) => {
    return (
        <div id="page-top">
            <div id="wrapper">
                <Leftsidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Header />
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>


        </div>
    )
}

export default Layout