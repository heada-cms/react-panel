import React from 'react';
import Header from "../organisms/header/Header";

const TemplateMain = ({children, className}) => {
    return (
        <div className={'bg-gray-100 min-h-screen'}>
            <Header/>
            <main className={`m-auto max-w-screen-2xl ${className}`}>
                {children}
            </main>
        </div>

    );
};

export default TemplateMain;
