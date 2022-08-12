import { FC, ReactElement } from "react";
import { ILayoutProps } from "../props";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
