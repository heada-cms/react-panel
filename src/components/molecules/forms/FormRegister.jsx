import Submit from '../../atoms/ui/buttons/regular/Submit';
import Input from '../../atoms/ui/inputs/IconInput';
import { useForm } from 'react-hook-form';
// import { useSignUpCustomer } from '../../../app/crud/auth/register';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FormError from '../../atoms/form-error/FormError';
import {useSignUp} from "../../../app/crud/auth/register";

const FormRegister = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const { mutate, isLoading, error } = useSignUp();
    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <>
            <FormError message={error && 'Ten email jest już zajęty.'} className={'mb-2'} />
            <form className={'w-80 flex space-y-2 flex-col'} onSubmit={handleSubmit(onSubmit)}>
                <Input required type={'email'} name={'email'} label={'Email'} register={register} error={errors.email?.message} />
                <Input required type={'password'} name={'password'} label={'Hasło'} register={register} error={errors.password?.message}/>
                <Input required type={'password'} name={'confirmPassword'} label={'Powtórz hasło'} register={register} error={errors.confirmPassword?.message}/>
                <div className={'flex w-full'}>
                    <Submit className={'flex w-full mt-4'} isLoading={isLoading}>Zarejstruj się</Submit>
                </div>
            </form>
        </>

    );
};

export default FormRegister;