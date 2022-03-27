import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';

const Tab = ({to, children}) => {
    const {pathname} = useLocation();

    return (
        <Link className={`border-t border-r border-l space-x-1 ${pathname !== to ? 'hover:bg-gray-200 transition bg-gray-200': ''} flex flex-row items-center text-sm flex w-max p-4 ${pathname === to ? 'bg-gray-100' : ''}`} to={to}>
            {children}
        </Link>
    );
};

export default Tab;
