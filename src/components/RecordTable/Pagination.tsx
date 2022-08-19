import { maxPageItem } from "@components/RecordTable/constants";
import { Table } from "@tanstack/react-table";
import { IPaginationProps } from "@typings/props";
import React, { FC, ReactElement, useState } from "react";
import { Form, Pagination as BootstrapPagination } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const goToPage = (table: Table<any>, page: number): void => {
    table.setPageIndex(page);
};

const getPages = (pageCount: number, activePage: number, table: Table<any>): JSX.Element[] => {
    let elements: JSX.Element[] = [];

    const isActive = (activePage: number, currentPage: number): string => {
        return activePage === currentPage ? "active" : "";
    };

    const pushElement = (number: number) => {
        elements.push(
            <BootstrapPagination.Item key={`${number}-page`} className={isActive(activePage, number)} onClick={() => goToPage(table, number - 1)}>
                {number}
            </BootstrapPagination.Item>
        );
    };

    if (pageCount < maxPageItem) {
        for (let i = 0; i < pageCount; i++) {
            pushElement(i + 1);
        }
    } else {
        for (let i = 0; i < maxPageItem; i++) {
            pushElement(i + 1);
        }
        elements.push(<BootstrapPagination.Ellipsis key="page-ellipsis" disabled={true} />);
        elements.push(
            <BootstrapPagination.Item key={`${pageCount}-page`} className={isActive(activePage, pageCount)} onClick={() => goToPage(table, pageCount - 1)}>
                {pageCount}
            </BootstrapPagination.Item>
        );
    }

    return elements;
};

interface ISetPageSizeProps {
    table: Table<any>;
    items: (string | number)[];
}

const SetPageSize: FC<ISetPageSizeProps> = ({ items, table }): ReactElement => {
    const [title, setTitle] = useState("10");

    const onClickHandler = (content: string) => {
        setTitle(content);
        table.setPageSize(Number(content));
    };

    return (
        <li className="page-item">
            <div className="d-flex">
                <p className="mb-0" style={{ marginTop: "6px" }}>
                    Show:{" "}
                </p>
                <Dropdown className="set-pages-dropdown mx-2">
                    <Dropdown.Toggle id="pagination-set-page-size">{title}</Dropdown.Toggle>

                    <Dropdown.Menu>
                        {items.map((count: number | string) => (
                            <Dropdown.Item key={count} onClick={(e: React.MouseEvent<HTMLElement>) => onClickHandler((e.target as HTMLElement).textContent)}>
                                {count}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </li>
    );
};

const Pagination: FC<IPaginationProps> = ({ table }): ReactElement => {
    return (
        <BootstrapPagination className="bg-light mb-1 justify-content-end border-top">
            <SetPageSize table={table} items={[5, 10, 20]} />
            <BootstrapPagination.First onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()} />
            <BootstrapPagination.Prev onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} />
            {getPages(table.getPageCount(), table.getState().pagination.pageIndex + 1, table)}
            <BootstrapPagination.Next onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} />
            <BootstrapPagination.Last onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()} />
            <li className="page-item">
                <p className="mb-0" style={{ marginTop: "6px" }}>
                    Jump to:
                </p>
            </li>
            <li className="page-item mx-2">
                <Form.Control
                    type="number"
                    className="select-page"
                    placeholder="Go to page"
                    value={table.getState().pagination.pageIndex + 1}
                    max={table.getPageCount()}
                    min={1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0;
                        table.setPageIndex(page);
                    }}
                />
            </li>
        </BootstrapPagination>
    );
};

export default Pagination;
