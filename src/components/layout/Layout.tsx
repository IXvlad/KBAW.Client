import React, { FC, ReactElement } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ILayoutProps } from "../props";

const Layout: FC<ILayoutProps> = ({ children }): ReactElement => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
