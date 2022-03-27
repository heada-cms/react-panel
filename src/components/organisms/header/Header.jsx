import React from 'react';
import CustomLink from "../../atoms/ui/buttons/links/CustomLink";
import {routes} from "../../../app/router/routes";

const Header = () => {
    return (
        <header className={'flex fixed top-0 left-0 z-10 w-full bg-white shadow-lg px-4 py-7 justify-center space-x-5'}>
            <CustomLink to={routes.home}>Home</CustomLink>
            <CustomLink to={routes.login}>Login</CustomLink>
            <CustomLink to={routes.register}>Register</CustomLink>
        </header>
    );
};

export default Header;
