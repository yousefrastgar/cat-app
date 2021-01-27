import React, {Fragment} from 'react';
import Header from './header/fullHeight1';
import Footer from './footer/footerCurvedLight';

const Layout = ({pageTitle, children}) => {
    return (
        <Fragment>
            <Header pageTitle={pageTitle}/>
            {children}
            <Footer/>
        </Fragment>
    );
}

export default Layout;
