import React from 'react';
import TemplateMain from "../../templates/TemplateMain";
import RegisterCard from "../../organisms/forms/RegisterCard";

const PageRegister = () => {
    return (
        <TemplateMain className={'flex justify-center pt-24'}>
            <RegisterCard/>
        </TemplateMain>
    );
};

export default PageRegister;
