import React from 'react';

const MenuSeparator = ({children}) => {
    return (
        <div className={'text-gray-500 mt-4 px-4'}>
            {children}
        </div>
    );
};

export default MenuSeparator;
