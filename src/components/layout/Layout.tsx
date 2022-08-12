﻿import Footer from "@components/layout/Footer";
import Navbar from "@components/layout/Navbar";
import { ILayoutProps } from "@typings/props";
import { FC, ReactElement } from "react";

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
