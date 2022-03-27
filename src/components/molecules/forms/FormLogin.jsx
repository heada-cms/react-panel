import Submit from '../../atoms/ui/buttons/regular/Submit';
// import { useSignIn } from '../../../app/crud/auth/login';
import Input from '../../atoms/ui/inputs/IconInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormError from '../../atoms/form-error/FormError';
import {useSignIn} from "../../../app/crud/auth/login";

const FormLogin = ( ) => {
    const schema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required(),
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const { mutate, isLoading, error } = useSignIn();
    const onSubmit = (data) => {
        console.log(data)
        mutate(data);
    };


    return (
        <>
            <FormError message={error && 'Nieprawidłowy email lub hasło.'} className={'mb-2'}/>
            <form className={'w-80 space-y-2 flex flex-col'} onSubmit={handleSubmit(onSubmit)}>
                <Input required type={'user'} name={'username'} label={'Login'} register={register} error={errors.email?.message} />
                <Input required type={'password'} name={'password'} label={'Hasło'} register={register} error={errors.password?.message} />
                <div className={'flex w-full'}>
                    <Submit className={'flex w-full mt-4'} isLoading={isLoading}>Zaloguj się</Submit>
                </div>
            </form>
        </>
    );
};

export default FormLogin;