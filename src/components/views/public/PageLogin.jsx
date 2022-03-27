import React from 'react';
import TemplateMain from "../../templates/TemplateMain";
import LogInCard from "../../organisms/forms/LogInCard";

const PageLogin = () => {
    return (
        <TemplateMain className={'flex justify-center pt-24'}>
            <LogInCard/>
        </TemplateMain>
    );
};

export default PageLogin;
