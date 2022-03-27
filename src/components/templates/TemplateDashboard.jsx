import React from 'react';
import SideMenu from "../organisms/side-menu/SideMenu";
import PanelHeader from "../organisms/header/PanelHeader";
import {BeatLoader} from 'react-spinners';

const TemplateDashboard = ({isLoading, children, tabsRenderer, breadcrumbsRenderer, actionButtonsRenderer}) => {

    return (
        <div className={'flex bg-gray-100'}>
            <div className={'fixed top-0 left-0 w-80 z-20'}>
                <SideMenu/>
            </div>
            <div className={'w-full min-h-screen flex flex-col'}>
                <div className={'fixed w-full z-10 top-0 h-36 bg-white left-0 pl-80'}>
                    <PanelHeader/>
                    {
                        (breadcrumbsRenderer || actionButtonsRenderer) &&
                        <div
                            className={'bg-white shadow-md h-16 items-center flex flex-row justify-between px-4 py-2 border-t'}>
                            {
                                breadcrumbsRenderer && breadcrumbsRenderer()
                            }
                            <div className={'ml-auto'}>
                                {actionButtonsRenderer && actionButtonsRenderer()}
                            </div>
                        </div>
                    }
                </div>


                <div className={`${tabsRenderer ? 'pt-40' : 'pt-32'} pl-80 h-full w-full flex flex-col `}>
                    <div className={'max-w-screen-xl px-4 w-full mx-auto'}>
                        {
                            tabsRenderer && tabsRenderer()
                        }
                    </div>

                    <div
                        className={`flex border-t bg-gray-100 ${tabsRenderer ? 'shadow-t' : ''} overflow-scroll h-full w-full`}>
                        <div className={'flex max-w-screen-xl px-4 py-8 w-full mx-auto'}>
                            {
                                isLoading ? <div className={'flex w-full items-center justify-center'}><BeatLoader/></div> : children
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateDashboard;
