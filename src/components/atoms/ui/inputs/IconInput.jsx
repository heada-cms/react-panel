import {selectIcon} from "../../../../app/utils/selectIcon";

const Input = ({ name, type, label, placeholder, register, required, error }) => {

    return (
        <div className={'w-full text-black relative'}>
            <label className={'text-sm'}>{label} {required && '*'}</label>
            <input
                autoComplete={false}
                placeholder={placeholder || label}
                className={'box-border w-full rounded-lg border shadow-sm pl-14 pr-4 py-2 bg-white h-10'}
                {...(register ? register(name, { required }) : {})}
                type={type}
            />
            <div className={'absolute w-4 h-4 flex left-4 top-9'}>
                <div className={'w-px h-6 -top-1 absolute left-7 bg-gray-400'}/>
                {
                    selectIcon(type)
                }
            </div>
            {
                error &&
                <p className={'text-sm text-red-500'}>{error}</p>
            }
        </div>
    );
};

export default Input;