import {Link} from "react-router-dom";

const ButtonLink = ({ children, to, className }) => {

    return (
        <Link to={to} className={`relative flex flex-row justify-center items-center font-bold py-2 px-8 rounded-lg  ${className}`}>
            {children}
        </Link>
    );
};

export default ButtonLink;