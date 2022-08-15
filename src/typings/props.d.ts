import IRouteItem from "@routes/models";
import React, { ReactElement } from "react";
import { DropdownMenuVariant } from "react-bootstrap/DropdownMenu";
import { ButtonVariant } from "react-bootstrap/types";

interface IDropdownItem {
    key: string | number;
    displayName: string;
    value: string | number;
}

interface IRemoteData {
    queryKey: string;
    fetchData(): Promise<IDropdownItem[]>;
}

interface IDropdownProps {
    children?: React.ReactNode;
    id: string;
    menuVariant?: DropdownMenuVariant;
    remoteData?: IRemoteData;
    title?: string;
    variant?: ButtonVariant;
}

interface IEmptyDropdownProps {
    children: React.ReactNode;
    id: string;
    menuVariant?: DropdownMenuVariant;
    title: string;
    variant?: ButtonVariant;
}

interface ILayoutProps {
    children: ReactElement;
}

interface INavLinkProps {
    route: IRouteItem;
}
