import { ReactElement } from "react";
import IRouteItem from "../routes/models";

interface ILayoutProps {
    children: ReactElement;
}

interface INavLinkProps {
    route: IRouteItem;
}
