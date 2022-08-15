import { makeData } from "@components/makeData";
import { IRecord } from "@components/models";
import Pagination from "@components/RecordTable/Pagination";
import TableBody from "@components/RecordTable/TableBody";
import TableHeader from "@components/RecordTable/TableHeader";
import { ColumnDef, createColumnHelper, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, Header, useReactTable } from "@tanstack/react-table";
import { IRecordTableProps } from "@typings/props";
import React, { FC, ReactElement } from "react";

const getColumns = (): ColumnDef<IRecord, any>[] => {
    type keys = keyof IRecord;
    const record: IRecord = {
        title: "",
        authors: [],
        certificateAuthorship: "",
        number: "",
        ydk: "",
        country: "",
        placePublication: "",
        classification: "",
        description: ""
    };

    const columnHelper = createColumnHelper<IRecord>();
    const createColumn = (key: keys, header: string, enableFilter: boolean = false, size: number = 200): ColumnDef<IRecord, any> => {
        return columnHelper.accessor(key, {
            cell: info => info.getValue(),
            size: size,
            header: header,
            enableColumnFilter: enableFilter
        });
    };

    return Object.keys(record).map((key: keys) => {
        switch (key) {
            case "title": {
                return createColumn(key, "Title", true, 600);
            }

            case "description": {
                return createColumn(key, "Description");
            }

            case "authors": {
                return createColumn(key, "Authors", true, 600);
            }

            case "certificateAuthorship": {
                return createColumn(key, "Certificate Authorship");
            }

            case "number": {
                return createColumn(key, "Number", true, 100);
            }

            case "ydk": {
                return createColumn(key, "Ydk", true);
            }

            case "country": {
                return createColumn(key, "Country", false, 100);
            }

            case "placePublication": {
                return createColumn(key, "Place Publication", false, 600);
            }

            case "classification": {
                return createColumn(key, "Classification");
            }

            default: {
                return createColumn(key, key);
            }
        }
    });
};

const hiddenColumn = (table: any, columnName: string) => {
    table.getHeaderGroups().forEach((headerGroup: any) => {
        headerGroup.headers.forEach((header: Header<any, unknown>) => {
            if (header.column.id === columnName) {
                header.column.toggleVisibility(false);
            }
        });
    });
};

const RecordTable: FC<IRecordTableProps> = ({ className }): ReactElement => {
    const [data, setData] = React.useState(() => makeData());
    const columns = getColumns();

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    });

    hiddenColumn(table, "description");

    return (
        <div className="table-border">
            <table className={className}>
                <TableHeader table={table} hiddenColumn="description" />
                <TableBody table={table} />
            </table>
            <Pagination table={table} />
        </div>
    );
};

export default RecordTable;
