import { BookHalf, Gear, PersonBadge } from "react-bootstrap-icons";
import Expert from "../pages/Expert";
import Main from "../pages/Main";
import Settings from "../pages/Settings";
import { resources } from "../resources/resources";
import IRouteItem from "./models";

export const routes: Array<IRouteItem> = [
    {
        key: "route-article",
        title: resources.Labels.main_page_title_lbl,
        tooltip: resources.Labels.main_page_title_lbl,
        path: "/",
        enabled: true,
        component: Main,
        appendDivider: true,
        icon: BookHalf
    },
    {
        key: "route-expert",
        title: resources.Labels.expert_page_title_lbl,
        tooltip: resources.Labels.expert_page_title_lbl,
        path: "/expert",
        enabled: true,
        component: Expert,
        icon: PersonBadge
    },
    {
        key: "route-settings",
        title: resources.Labels.settings_page_title_lbl,
        tooltip: resources.Labels.settings_page_title_lbl,
        path: "/settings",
        enabled: false,
        component: Settings,
        icon: Gear
    }
];
