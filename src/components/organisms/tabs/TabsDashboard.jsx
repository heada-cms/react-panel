import React from 'react';
import TabsGroup from "../../molecules/tabs-group/TabsGroup";
import Tab from "../../atoms/tab/Tab";
import {routes} from "../../../app/router/routes";
import {FaUser, FaLayerGroup} from "react-icons/fa";
import {RiGroupFill} from "react-icons/ri";

const TabsDashboard = () => {
    return (
        <TabsGroup>
            <Tab to={routes.tab}>
                <FaUser/>
                <p>Tab</p>
            </Tab>
            <Tab to={routes.anotherTab}>
                <RiGroupFill/>
                <p>Another tab</p>
            </Tab>
            <Tab to={routes.yetAnotherTab}>
                <FaLayerGroup/>
                <p>Yet another tab</p>
            </Tab>
            <Tab to={routes.thisIsATab}>
                <FaLayerGroup/>
                <p>This is a tab</p>
            </Tab>
        </TabsGroup>
    );
};

export default TabsDashboard;
