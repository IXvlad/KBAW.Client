import { collapseColumnSize } from "@components/RecordTable/constants";
import { Cell, flexRender, Row } from "@tanstack/react-table";
import { ITableRowProps } from "@typings/props";
import { FC, ReactElement, useState } from "react";
import { Collapse } from "react-bootstrap";
import { ChevronDown } from "react-bootstrap-icons";

const getHiddenCells = (row: Row<any>): Cell<any, unknown>[] => {
    return row.getAllCells().filter(cell => !row.getVisibleCells().includes(cell));
};

const TableRow: FC<ITableRowProps> = ({ row, rowId }): ReactElement => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <tr key={rowId}>
                <td key={`${rowId}-expanded`} style={{ width: collapseColumnSize, textAlign: "center" }}>
                    <ChevronDown onClick={() => setOpen(!open)} aria-controls={`${rowId}-td-details`} aria-expanded={open} className="arrow-collapse" />
                </td>
                {row.getVisibleCells().map(cell => {
                    return (
                        <td key={cell.id} style={{ width: cell.column.getSize() }}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    );
                })}
            </tr>
            <tr key={`${rowId}-tr-details`}>
                <Collapse in={open}>
                    <td id={`${rowId}-td-details`} key={`${rowId}-td-details`} colSpan={row.getAllCells().length} className="collapse-row">
                        {getHiddenCells(row)[0].renderValue() as string}
                    </td>
                </Collapse>
            </tr>
        </>
    );
};

export default TableRow;
