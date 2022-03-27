import React from 'react';
import CustomLink from "../../atoms/ui/buttons/links/CustomLink";
import {routes} from "../../../app/router/routes";
import {AiFillMessage} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi";

const Header = () => {
    return (
        <header className={'flex items-center w-full bg-white shadow-lg px-4 py-7 justify-end space-x-5'}>
            <CustomLink to={routes.home}><AiFillMessage className={'w-6 h-6'}/></CustomLink>
            <CustomLink disableUnderline to={routes.home}><BiLogOut className={'w-6 h-6 mr-1'}/>Wyloguj</CustomLink>
        </header>
    );
};

export default Header;
