import {AiOutlineMail, AiOutlineUser} from 'react-icons/ai';
import {BsKey} from "react-icons/bs";

export const selectIcon = (type) => {
    if(type==="email") return <AiOutlineMail/>
    if(type==="user") return <AiOutlineUser/>
    else if(type==="password") return <BsKey/>
    else return null;
}