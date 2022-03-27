import Card from '../../atoms/card/Card';
import FormLogin from '../../molecules/forms/FormLogin';
import CustomLink from '../../atoms/ui/buttons/links/CustomLink';
import { routes } from '../../../app/router/routes';

const LogInCard = ({redirect}) => {
    return (
        <Card className={'w-max'} title={'Logowanie'}>
            <div className={'mt-4'}>
                <FormLogin redirect={redirect} />
                <CustomLink className={'pb-4 mt-4 border-b'} to={routes.forgotPassword}>
                    Nie pamiętasz hasła?
                </CustomLink>
                <CustomLink className={'mt-4'} to={routes.register}>
                    Nie masz konta?
                </CustomLink>
            </div>
        </Card>
    );
};

export default LogInCard;