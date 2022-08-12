import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { INavLinkProps } from "../../typings/props";

const NavLink: FC<INavLinkProps> = (props): ReactElement => {
    const route = props.route;

    return (
        <Link className="nav-link" to={route.path}>
            {route.title}
        </Link>
    );
};

export default NavLink;
