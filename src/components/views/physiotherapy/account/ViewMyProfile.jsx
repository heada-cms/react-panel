import React from 'react';
import TemplateDashboard from "../../../templates/TemplateDashboard";
import {routes} from "../../../../app/router/routes";
import Breadcrumbs from "../../../organisms/breadcrumbs/Breadcrumbs";

const ViewMyProfile = () => {
    const bc = [{label: 'Mój profil', url: routes.profile}]
    return (
        <TemplateDashboard
            breadcrumbsRenderer={() => <Breadcrumbs settings={bc}/>}
        >
            moj profil
        </TemplateDashboard>

    );
};

export default ViewMyProfile;
