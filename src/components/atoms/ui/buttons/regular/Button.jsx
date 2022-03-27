import { FaSpinner } from 'react-icons/fa';

const Button = ({ children, className, isLoading, disabled }) => {
    const tw_classes = `relative flex flex-row justify-center items-center 
  ${disabled ? 'bg-gray-500 cursor-default' : 'bg-gray-900 transition hover:bg-gray-700'} 
  font-bold py-2 px-8 rounded-lg ${isLoading ? 'text-transparent' : 'text-white'} ${className}`;

    return (
        <button disabled={isLoading || disabled} className={tw_classes}>
            <div className={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'}>
                <FaSpinner className={`${isLoading ? 'animate-spin text-white' : 'text-transparent'}`} />
            </div>
            {children}
        </button>
    );
};

export default Button;