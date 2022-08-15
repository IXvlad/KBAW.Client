import { collapseColumnSize } from "@components/RecordTable/constants";
import Filter from "@components/RecordTable/Filter";
import { flexRender } from "@tanstack/react-table";
import { ITableHeaderProps } from "@typings/props";
import { FC } from "react";

const TableHeader: FC<ITableHeaderProps> = ({ table, hiddenColumn }): JSX.Element => {
    return (
        <thead className="bg-light" style={{ display: "block", width: table.getCenterTotalSize() + collapseColumnSize }}>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    <th key={`${headerGroup.id}-expanded`} colSpan={1} style={{ width: collapseColumnSize }} />
                    {headerGroup.headers.map(header => {
                        return (
                            <th key={header.id} colSpan={header.colSpan} style={{ width: header.getSize() }}>
                                {header.isPlaceholder ? null : (
                                    <div>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {header.column.getCanFilter() ? <Filter column={header.column} table={table} /> : <div className="mt-2" style={{ height: "38px" }} />}
                                    </div>
                                )}
                            </th>
                        );
                    })}
                </tr>
            ))}
        </thead>
    );
};

export default TableHeader;
