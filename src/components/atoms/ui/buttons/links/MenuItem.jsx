import {Link, useLocation} from 'react-router-dom';

const MenuItem = ({ className, children, to }) => {
    const {pathname} = useLocation();
    return (
        <Link
            className={`flex text-sm px-4 py-4 items-center space-x-2 ${pathname.includes(to) ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 text-gray-400 hover:text-white'} transition ${className}`}
            to={to}>
            {children}
        </Link>
    );
};

export default MenuItem;