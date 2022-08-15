import RecordTable from "@components/RecordTable/RecordTable";
import { getMaterialsAsync } from "@kbaw/services/getMaterials";
import { getRecordsAsync } from "@kbaw/services/getRecords";
import { IDropdownRemoteData, IRecordTableRemoteData } from "@typings/props";
import { FC, ReactElement } from "react";

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
        <div>
            <div className="mt-3 mb-3">
                <RecordTable className="record-table" />
            </div>
        </div>
    );
};

export default Main;
