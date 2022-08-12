import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { INavLinkProps } from "../props";

const NavLink: FC<INavLinkProps> = (props): ReactElement => {
    const route = props.route;

    return (
        <div>
            <Link className="nav-link" to={route.path}>
                {route.title}
            </Link>
        </div>
    );
};

export default NavLink;
