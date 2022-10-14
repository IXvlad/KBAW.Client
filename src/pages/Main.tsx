import CustomDropdown from "@components/controls/CustomDropdown";
import PagePaper from "@components/PagePaper";
import { getMaterialsAsync } from "@kbaw/services/getMaterials";
import { getRecordsAsync } from "@kbaw/services/getRecords";
import { resources } from "@resources/resources";
import { IDropdownRemoteData, IRecordTableRemoteData } from "@typings/props";
import { FC, ReactElement } from "react";
import { Container, Form } from "react-bootstrap";

const fetchMaterials: IDropdownRemoteData = {
    queryKey: nameof(getMaterialsAsync),
    fetchData: getMaterialsAsync
};

const fetchRecords: IRecordTableRemoteData = {
    queryKey: nameof(getRecordsAsync),
    fetchData: getRecordsAsync
};

const Main: FC<{}> = (): ReactElement => {
    return (
        <>
            <PagePaper title={resources.Labels.main_title_lbl} subTitle={resources.Labels.main_sub_title_lbl} className="mb-3" />
            <Container>
                <div className="mt-3 mb-3">
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="Select">Select material (dropdown)</Form.Label>
                        <CustomDropdown id="custom-dropdown" remoteData={fetchMaterials} withDownload={true} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMaterial">
                        <Form.Label>Material</Form.Label>
                        <Form.Control placeholder="Enter material" />
                        <Form.Text className="text-muted">Specify the material of interest.</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Disabled input</Form.Label>
                        <Form.Control placeholder="Disabled input" disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </div>
            </Container>
        </>
    );
};

export default Main;
