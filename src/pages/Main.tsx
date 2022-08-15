import CustomDropdown from "@components/controls/CustomDropdown";
import { getMaterialsAsync } from "@kbaw/services/getMaterials";
import { IRemoteData } from "@typings/props";
import { FC, ReactElement } from "react";
import { Dropdown } from "react-bootstrap";

const fetchMaterials: IRemoteData = {
    queryKey: nameof(getMaterialsAsync),
    fetchData: getMaterialsAsync
};

const Main: FC<{}> = (): ReactElement => {
    return (
        <div>
            <div className="mt-3">
                <CustomDropdown id="custom-dropdown" variant="light" title={"Choose material"} remoteData={fetchMaterials} />
            </div>
            <div className="mt-3">
                <CustomDropdown id="custom-dropdown-2" variant="light">
                    <Dropdown.Item>Action</Dropdown.Item>
                    <Dropdown.Item>Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item>
                </CustomDropdown>
            </div>
        </div>
    );
};

export default Main;
