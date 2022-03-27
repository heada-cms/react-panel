import React from 'react';
import TemplateDashboard from "../../../templates/TemplateDashboard";
import TabsDashboard from "../../../organisms/tabs/TabsDashboard";
import Breadcrumbs from "../../../organisms/breadcrumbs/Breadcrumbs";
import {routes} from "../../../../app/router/routes";

const ViewPhysiotherapyDashboardThisIsATab = () => {
    const bc = [{label: 'Tab', url: routes.tab}]
    return (
        <TemplateDashboard
            tabsRenderer={()=><TabsDashboard/>}
            breadcrumbsRenderer={() => <Breadcrumbs settings={bc}/>}
        >
            this is a tab
        </TemplateDashboard>

    );
};

export default ViewPhysiotherapyDashboardThisIsATab;
