import { collapseColumnSize } from "@components/RecordTable/constants";
import { ITableBodyProps } from "@typings/props";
import { FC } from "react";

import TableRow from "@components/RecordTable/TableRow";

const TableBody: FC<ITableBodyProps> = ({ table }): JSX.Element => {
    return (
        <tbody style={{ width: table.getCenterTotalSize() + collapseColumnSize }}>
            {table.getRowModel().rows.map(row => {
                return <TableRow key={row.id} row={row} rowId={row.id} />;
            })}
        </tbody>
    );
};

export default TableBody;
