import { IFilterProps } from "@typings/props";
import { FC, ReactElement } from "react";
import { Form } from "react-bootstrap";

const Filter: FC<IFilterProps> = ({ column, table }): ReactElement => {
    const firstValue = table.getPreFilteredRowModel().flatRows[0]?.getValue(column.id);
    const columnFilterValue = column.getFilterValue();

    return typeof firstValue === "number" ? (
        <div className="flex space-x-2">
            <Form.Control
                type="number"
                value={(columnFilterValue as [number, number])?.[0] ?? ""}
                onChange={e => column.setFilterValue((old: [number, number]) => [e.target.value, old?.[1]])}
                placeholder={`Min`}
            />
            <Form.Control
                type="number"
                value={(columnFilterValue as [number, number])?.[1] ?? ""}
                onChange={e => column.setFilterValue((old: [number, number]) => [old?.[0], e.target.value])}
                placeholder={`Max`}
            />
        </div>
    ) : (
        <Form.Control type="text" value={(columnFilterValue ?? "") as string} onChange={e => column.setFilterValue(e.target.value)} placeholder={`Search...`} className="mt-2 mb-1" />
    );
};

export default Filter;
