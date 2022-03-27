import React from 'react';
import Card from "../../atoms/card/Card";

const TitledSection = ({children, title}) => {
    return (
        <div>
            <p className={'font-bold'}>{title}</p>
            {children}
        </div>
    );
};

export default TitledSection;
