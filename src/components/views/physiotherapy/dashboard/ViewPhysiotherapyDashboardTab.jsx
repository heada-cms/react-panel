import React from 'react';
import TemplateDashboard from "../../../templates/TemplateDashboard";
import TabsDashboard from "../../../organisms/tabs/TabsDashboard";
import Breadcrumbs from "../../../organisms/breadcrumbs/Breadcrumbs";
import {routes} from "../../../../app/router/routes";
import ButtonLink from "../../../atoms/ui/buttons/links/ButtonLink";

const ViewPhysiotherapyDashboardTab = () => {
    const bc = [{label: 'Pulpit', url: routes.tab}]
    return (
        <TemplateDashboard
            tabsRenderer={() => <TabsDashboard/>}
            breadcrumbsRenderer={() => <Breadcrumbs settings={bc}/>}
            actionButtonsRenderer={() => <ButtonLink to={routes.tab} className={'text-white text-sm bg-green-700 hover:bg-green-600'}>+ Dodaj</ButtonLink>}
        >
            tab
        </TemplateDashboard>
    );
};

export default ViewPhysiotherapyDashboardTab;
