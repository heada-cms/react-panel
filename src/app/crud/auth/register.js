import axios from '../../config/axios';
import {BASE_URL_API} from '../../config/env';
import {useMutation} from 'react-query';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {actionAuthLoginWithEmail} from '../../redux/authReducer/authActionTypes';
import {routes} from '../../router/routes';

export const useSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname

    return useMutation((data) => {
        return axios.post(`${BASE_URL_API}/sign-up`, data)
            .then(({data}) => data)
            .then(data => {
                dispatch(actionAuthLoginWithEmail(data?.token))
                return data;
            })
            .then(data => {
                navigate(from || routes.tab, {replace: true});
                return data
            })
    });
};