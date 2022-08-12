import { resources } from "@resources/resources";
import { FC, ReactElement } from "react";

const Footer: FC<{}> = (): ReactElement => {
    return (
        <footer className="bg-light pt-4">
            <div className="text-center py-3">
                © {new Date().getFullYear()} Copyright:
                <a href={resources.Urls.github_lnk}> {resources.Labels.footer_lbl}</a>
            </div>
        </footer>
    );
};

export default Footer;
