import React from 'react';
import {Link} from "react-router-dom";
import {routes} from "../../../app/router/routes";
import {AiFillHome} from "react-icons/ai";
import {MdArrowRight} from "react-icons/md";

const Breadcrumbs = ({isLoading, settings}) => {
    if(isLoading) return null;
    return (
        <div className={'flex flex-row items-center space-x-1 text-sm'}>
            <Link className={'text-gray-900 hover:text-gray-700 transition'} to={routes.tab}>
                <AiFillHome/>
            </Link>

            {
                settings && settings.map((link, id) => {
                    return (
                        <div className={'flex items-center'} key={link+id}>
                            <MdArrowRight/>
                            <Link className={'text-gray-900 hover:text-gray-700 transition'} to={link?.url || routes.home}>{link?.label || 'error'}</Link>
                        </div>
                    )
                })
                }
                </div>
                );
            };

            export default Breadcrumbs;
