import { resources } from "@resources/resources";
import { useQuery } from "@tanstack/react-query";
import { IDropdownItem, IDropdownProps, IEmptyDropdownProps } from "@typings/props";
import React, { FC, ReactElement, useState } from "react";
import { Card, Dropdown, Spinner } from "react-bootstrap";
import { ChevronDown, Download } from "react-bootstrap-icons";

const EmptyDropdown: FC<IEmptyDropdownProps> = ({ id, title, children }): ReactElement => (
    <Dropdown id={id} className="custom-dropdown" style={{ width: "200px" }}>
        <div className="content">
            <Dropdown.Toggle className="custom-dropdown-toggle">
                <div className="d-flex align-items-center">
                    <div>{title}</div>
                    <ChevronDown style={{ marginLeft: "auto" }} />
                </div>
            </Dropdown.Toggle>
        </div>
        <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
);

const CustomDropdown: FC<IDropdownProps> = ({ title, remoteData, id, children, withDownload }): ReactElement => {
    const useRemoteData = !!remoteData;
    const { isLoading, data, error } = useQuery([remoteData?.queryKey], remoteData?.fetchData, { retry: false, enabled: useRemoteData });
    const [dropdownTitle, setDropdownTitle] = useState(title ? title : resources.Labels.dropdown_title_lbl);

    if ((useRemoteData && isLoading) || error) {
        return (
            <EmptyDropdown id={id} title={dropdownTitle}>
                {error ? <></> : <Spinner className="dropdown-spinner" animation="border" variant="info" />}
            </EmptyDropdown>
        );
    }

    const onClickHandler = (textContent: string) => {
        setDropdownTitle(textContent);
    };

    return (
        <Dropdown id={id} className="custom-dropdown" style={withDownload ? { width: "240px" } : { width: "200px" }}>
            <div className="content">
                <Card className="card-icon-dropdown" style={withDownload ? {} : { display: "none" }}>
                    <Card.Body className="card-body">
                        <Download className="text-primary" />
                    </Card.Body>
                </Card>
                <div className="vl mt-2" style={withDownload ? {} : { display: "none" }} />
                <Dropdown.Toggle className="custom-dropdown-toggle">
                    <div className="d-flex align-items-center">
                        <div>{dropdownTitle}</div>
                        <ChevronDown style={{ marginLeft: "auto" }} />
                    </div>
                </Dropdown.Toggle>
            </div>
            <Dropdown.Menu>
                {remoteData
                    ? data.map((item: IDropdownItem) => (
                          <Dropdown.Item key={item.key} onClick={(e: React.MouseEvent<HTMLElement>) => onClickHandler((e.target as HTMLElement).textContent)}>
                              {item.displayName}
                          </Dropdown.Item>
                      ))
                    : children}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CustomDropdown;
