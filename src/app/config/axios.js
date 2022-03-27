import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {registerMock} from "../crud/mock/register";
import {exercisesMock} from "../crud/mock/exercises";
import {actionAuthLogout} from "../redux/authReducer/authActionTypes";
import {exerciseMock} from "../crud/mock/exercise";

const axiosInstance = axios.create();

export const mock = new MockAdapter(axiosInstance, {
    delayResponse: 1000
});

export const setupAxios = (store) => {
    // add user token to axios if provided
    axiosInstance.interceptors.request.use(
        (config) => {
            // console.log(config);
            const {
                auth: { token },
            } = store.getState()
            if (!config.url) console.error('request.url is undefined')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        },
        (err) => Promise.reject(err),
    );

    axiosInstance.interceptors.response.use(
        response => {
            if(response && response.headers && response.headers['content-type'] ==='text/html'){
                console.error(`Expected 'application/json' got 'text/html`)
                return Promise.reject(`Expected 'application/json' got 'text/html'`);
            }
            return response;
        },
        error => {
            if(error.request.status === 401) {
                store.dispatch(actionAuthLogout());
            }
            return Promise.reject(error);
        }
    );
}


export const setupAxiosMocks = () => {
    registerMock(mock);
    exercisesMock(mock);
    exerciseMock(mock);
    mock.onAny().passThrough();
};

export default axiosInstance;