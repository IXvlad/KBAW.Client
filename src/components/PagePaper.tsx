import { IPagePaperProps } from "@typings/props";
import { FC, ReactElement } from "react";
import { Card, Container } from "react-bootstrap";
import { ReceiptCutoff } from "react-bootstrap-icons";

const PagePaper: FC<IPagePaperProps> = ({ className, title, subTitle }): ReactElement => {
    return (
        <div className={className + " page-paper"}>
            <Container className="pt-3 d-flex">
                <Card className="card-icon">
                    <Card.Body className="card-body">
                        <ReceiptCutoff className="fs-5 text-primary" />
                    </Card.Body>
                </Card>
                <div className="d-flex flex-column mx-3">
                    <strong className="h6 mb-0 mt-2">{title}</strong>
                    <p style={{ fontSize: "0.8rem" }}>{subTitle}</p>
                </div>
            </Container>
        </div>
    );
};

export default PagePaper;
