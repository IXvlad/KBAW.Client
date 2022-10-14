import { IRecord } from "@components/models";
import IRouteItem from "@routes/models";
import { Column, Table } from "@tanstack/react-table";
import { Table as ReactTable } from "@tanstack/table-core";
import React, { ReactElement } from "react";

interface IDropdownItem {
    key: string | number;
    displayName: string;
    value: string | number;
}

interface IDropdownProps {
    children?: React.ReactNode;
    id: string;
    remoteData?: IDropdownRemoteData;
    placeholder?: string;
    placeholderColor?: string;
    withDownload?: boolean;
}

interface IDropdownRemoteData {
    queryKey: string;
    fetchData(): Promise<IDropdownItem[]>;
}

interface IEmptyDropdownProps {
    children: React.ReactNode;
    id: string;
    text: string;
}

interface IFilterProps {
    column: Column<any, any>;
    table: ReactTable<any>;
}

interface ILayoutProps {
    children: ReactElement;
}

interface INavLinkProps {
    route: IRouteItem;
}

interface IPaginationProps {
    table: ReactTable<any>;
}

interface IPagePaperProps {
    className?: string;
    title: string;
    subTitle: string;
}

interface IRecordTableProps {
    className?: string;
    remoteData?: IRecordTableRemoteData;
}

interface IRecordTableRemoteData {
    queryKey: string;
    fetchData(): Promise<IRecord[]>;
}

interface ITableBodyProps {
    table: Table<any>;
}

interface ITableHeaderProps {
    table: Table<any>;
    hiddenColumn: string;
}

interface ITableRowProps {
    row: any;
    rowId: string;
}
