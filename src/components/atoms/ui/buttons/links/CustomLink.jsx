import { Link } from 'react-router-dom';

const CustomLink = ({ className, children, to, disableUnderline }) => {
    return (
        <Link
            className={`flex justify-center ${disableUnderline ? '' : 'hover:underline'} transition text-gray-900 hover:text-gray-700 ${className}`}
            to={to}>
            {children}
        </Link>
    );
};

export default CustomLink;