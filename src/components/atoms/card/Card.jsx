const Card = ({ children, title, noPadding, className, icon }) => {
    return (
        <div className={`rounded shadow-md w-full bg-white ${!noPadding && 'p-4'} ${className}`}>
            {title && <h1 className={'flex items-center font-bold text-xl border-b'}>{title}{icon && icon()}</h1>}
            {children}
        </div>
    );
};

export default Card;