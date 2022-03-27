import React from 'react';
import TemplateDashboard from "../../../templates/TemplateDashboard";
import TabsDashboard from "../../../organisms/tabs/TabsDashboard";
import {routes} from "../../../../app/router/routes";
import Breadcrumbs from "../../../organisms/breadcrumbs/Breadcrumbs";

const ViewPhysiotherapyDashboardYetAnotherTab = () => {
    const bc = [{label: 'Tab', url: routes.tab}]
    return (
        <TemplateDashboard
            tabsRenderer={()=><TabsDashboard/>}
            breadcrumbsRenderer={() => <Breadcrumbs settings={bc}/>}
        >
            yet another tab
        </TemplateDashboard>

    );
};

export default ViewPhysiotherapyDashboardYetAnotherTab;
