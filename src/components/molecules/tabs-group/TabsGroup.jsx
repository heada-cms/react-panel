import React from 'react';

const TabsGroup = ({children}) => {
    return (
        <div className={'relative translate-y-px flex space-x-1'}>
            {children}
        </div>
    );
};

export default TabsGroup;
