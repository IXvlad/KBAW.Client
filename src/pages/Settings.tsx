import PagePaper from "@components/PagePaper";
import { resources } from "@resources/resources";
import { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";

const Settings: FC<{}> = (): ReactElement => {
    return (
        <>
            <PagePaper title={resources.Labels.settings_title_lbl} subTitle={resources.Labels.settings_sub_title_lbl} className="mb-3" />
            <Container>Settings</Container>
        </>
    );
};

export default Settings;
