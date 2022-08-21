import PagePaper from "@components/PagePaper";
import { resources } from "@resources/resources";
import { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";

const Expert: FC<{}> = (): ReactElement => {
    return (
        <>
            <PagePaper title={resources.Labels.expert_title_lbl} subTitle={resources.Labels.expert_sub_title_lbl} className="mb-3" />
            <Container>Expert</Container>
        </>
    );
};

export default Expert;
