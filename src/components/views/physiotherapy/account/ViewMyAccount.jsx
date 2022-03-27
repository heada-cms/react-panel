import React from 'react';
import TemplateDashboard from "../../../templates/TemplateDashboard";
import {routes} from "../../../../app/router/routes";
import Breadcrumbs from "../../../organisms/breadcrumbs/Breadcrumbs";

const ViewMyAccount = () => {
    const bc = [{label: 'Moje konto', url: routes.account}]
    return (
        <TemplateDashboard
            breadcrumbsRenderer={() => <Breadcrumbs settings={bc}/>}
        >
            moje konto
        </TemplateDashboard>

    );
};

export default ViewMyAccount;
