import Card from '../../atoms/card/Card';
import FormRegister from '../../molecules/forms/FormRegister';
import CustomLink from '../../atoms/ui/buttons/links/CustomLink';
import {routes} from '../../../app/router/routes';

const RegisterCard = () => {
    return (
        <Card className={'w-max'} title={'Rejestracja'}>
            <div className={'mt-4'}>
                <FormRegister/>
                <CustomLink className={'border-t pt-4 mt-6'} to={routes.login}>
                    Masz już konto?
                </CustomLink>
            </div>
        </Card>
    );
};

export default RegisterCard;