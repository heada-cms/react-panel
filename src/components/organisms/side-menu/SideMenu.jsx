import React from 'react';
import {routes} from "../../../app/router/routes";
import MenuItem from "../../atoms/ui/buttons/links/MenuItem";
import {AiFillHome, AiFillSetting} from "react-icons/ai";
import {FaUser} from "react-icons/fa";
import MenuSeparator from "../../atoms/separators/MenuSeparator";

const SideMenu = () => {
    return (
        <div className={'w-full text-white h-screen'}>
            <div className={'bg-gray-800 h-full'}>
                <div className={'bg-gray-900 px-4 py-6 h-20 shadow-lg'}/>
                <MenuSeparator>Panel</MenuSeparator>
                <MenuItem to={routes.tab}>
                    <AiFillHome/><p>Pulpit</p>
                </MenuItem>

                <MenuSeparator>Konto</MenuSeparator>
                <MenuItem to={routes.account}>
                    <FaUser/><p>Mój profil</p>
                </MenuItem>
                <MenuItem to={routes.profile}>
                    <AiFillSetting/><p>Moje konto</p>
                </MenuItem>

            </div>
        </div>
    );
};

export default SideMenu;
