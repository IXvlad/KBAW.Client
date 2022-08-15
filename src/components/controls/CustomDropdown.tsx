import { resources } from "@resources/resources";
import { useQuery } from "@tanstack/react-query";
import { IDropdownItem, IDropdownProps, IEmptyDropdownProps } from "@typings/props";
import React, { FC, ReactElement, useState } from "react";
import { Dropdown, DropdownButton, Spinner } from "react-bootstrap";

const EmptyDropdown: FC<IEmptyDropdownProps> = ({ variant, menuVariant, id, title, children }): ReactElement => (
    <DropdownButton variant={variant} menuVariant={menuVariant} id={id} title={title}>
        {children}
    </DropdownButton>
);

const CustomDropdown: FC<IDropdownProps> = ({ title, remoteData, id, children, variant, menuVariant }): ReactElement => {
    const useRemoteData = !!remoteData;
    const { isLoading, data, error } = useQuery([remoteData?.queryKey], remoteData?.fetchData, { retry: false, enabled: useRemoteData });
    const [dropdownTitle, setDropdownTitle] = useState(title ? title : resources.Labels.dropdown_title_lbl);

    if ((useRemoteData && isLoading) || error) {
        return (
            <EmptyDropdown variant={variant} menuVariant={menuVariant} id={id} title={dropdownTitle}>
                {error ? <></> : <Spinner className="dropdown-spinner" animation="border" variant="info" />}
            </EmptyDropdown>
        );
    }

    const onClickHandler = (textContent: string) => {
        setDropdownTitle(textContent);
    };

    return (
        <DropdownButton variant={variant} menuVariant={menuVariant} id={id} title={dropdownTitle}>
            {remoteData
                ? data.map((item: IDropdownItem) => (
                      <Dropdown.Item key={item.key} onClick={(e: React.MouseEvent<HTMLElement>) => onClickHandler((e.target as HTMLElement).textContent)}>
                          {item.displayName}
                      </Dropdown.Item>
                  ))
                : children}
        </DropdownButton>
    );
};

export default CustomDropdown;
