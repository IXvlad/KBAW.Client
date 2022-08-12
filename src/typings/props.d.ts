import IRouteItem from "@routes/models";
import { ReactElement } from "react";

interface ILayoutProps {
    children: ReactElement;
}

interface INavLinkProps {
    route: IRouteItem;
}
