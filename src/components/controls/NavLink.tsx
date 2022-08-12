import { INavLinkProps } from "@typings/props";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const NavLink: FC<INavLinkProps> = (props): ReactElement => {
    const route = props.route;

    return (
        <Link className="nav-link" to={route.path}>
            {route.title}
        </Link>
    );
};

export default NavLink;
