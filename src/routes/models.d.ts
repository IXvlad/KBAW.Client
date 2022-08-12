import { ComponentType, FC } from "react";

interface IRouteItem {
    key: string;
    title: string;
    tooltip?: string;
    path?: string;
    component?: FC<{}>;
    enabled?: boolean;
    icon?: ComponentType;
    subRoutes?: Array<IRouteItem>;
    appendDivider?: boolean;
}

export default IRouteItem;
