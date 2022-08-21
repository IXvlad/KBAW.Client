import CustomDropdown from "@components/controls/CustomDropdown";
import PagePaper from "@components/PagePaper";
import RecordTable from "@components/RecordTable/RecordTable";
import { getMaterialsAsync } from "@kbaw/services/getMaterials";
import { getRecordsAsync } from "@kbaw/services/getRecords";
import { resources } from "@resources/resources";
import { IDropdownRemoteData, IRecordTableRemoteData } from "@typings/props";
import { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";

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
                    <CustomDropdown id="custom-dropdown" title={"Choose material"} remoteData={fetchMaterials} withDownload={true} />
                </div>
                <div className="mt-3 mb-3">
                    <RecordTable className="record-table" />
                </div>
            </Container>
        </>
    );
};

export default Main;
