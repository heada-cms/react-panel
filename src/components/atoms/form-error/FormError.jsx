import React from 'react';
import { BiError } from 'react-icons/bi';

const FormError = ({message, className}) => {
    if(!message)
        return null;
    return (
        <div className={`flex flex-row items-center bg-red-500 text-white rounded p-2 justify-center ${className}`}>
            <BiError className={'mr-2'}/>
            {message}
        </div>
    );
};

export default FormError;