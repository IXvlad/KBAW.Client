import { collapseColumnSize } from "@components/RecordTable/constants";
import { Cell, flexRender, Row } from "@tanstack/react-table";
import { ITableRowProps } from "@typings/props";
import React, { FC, ReactElement, useState } from "react";
import { Collapse } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";

const getReadableString = (camelString: string): string => {
    const str = camelString.replace(/([A-Z])/g, " $1");
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const getHiddenCells = (row: Row<any>): Cell<any, unknown>[] => {
    return row.getAllCells().filter(cell => !row.getVisibleCells().includes(cell));
};

const createSubField = (key: string, displayName: string, value: string): React.ReactNode => {
    return (
        <div key={key} className={displayName === "description" ? "d-flex flex-column" : "d-flex"}>
            <p style={{ marginRight: "2px", marginBottom: 0 }}>
                <span style={{ fontWeight: "600" }}>{displayName.toLowerCase() === "description" ? "" : displayName + ":"}</span> {value ? value : "-"}
            </p>
        </div>
    );
};

const TableRow: FC<ITableRowProps> = ({ row, rowId }): ReactElement => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr key={rowId}>
                <td className="px-1" key={`${rowId}-expanded`} style={{ width: collapseColumnSize, textAlign: "center", borderRight: 0 }}>
                    <ChevronDown onClick={() => setOpen(!open)} aria-controls={`${rowId}-td-details`} aria-expanded={open} className="arrow-collapse" />
                </td>
                {row.getVisibleCells().map(cell => {
                    return (
                        <td className="py-2" key={cell.id} style={{ width: cell.column.getSize() }}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    );
                })}
            </tr>
            <tr key={`${rowId}-tr-details`} className="border-top border-bottom">
                <td key={`${rowId}-td-details`} colSpan={3} style={!open ? { display: "none" } : { display: "table-cell" }}>
                    <Collapse in={open}>
                        <div id={`${rowId}-td-details`} className="mb-3 mt-3 px-3">
                            <div key={`${rowId}-sub-field`} className="d-flex flex-column">
                                {getHiddenCells(row).map((cell: Cell<any, unknown>, index) =>
                                    createSubField(`${rowId}-${index}-sub-field-value`, getReadableString(cell.column.id), cell.renderValue() as string)
                                )}
                            </div>
                        </div>
                    </Collapse>
                </td>
            </tr>
        </>
    );
};

export default TableRow;
