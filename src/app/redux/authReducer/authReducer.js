import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { TYPE_LOGIN_WITH_EMAIL, TYPE_LOGOUT } from './authActionTypes';

const initialState = () => ({
    token: null,
});

const reducer = (state = initialState(), { type, payload }) => {
    switch (type) {
        case TYPE_LOGIN_WITH_EMAIL: {
            return {
                token: payload
            };
        }
        case TYPE_LOGOUT: {
            return initialState();
        }
        case 'persist/REHYDRATE': {
            return {
                ...initialState(),
                ...state
            };
        }
        default:
            return state;
    }
};

const persistConfig = {
    key: 'app.auth.userToken',
    storage
};

export const authReducer = persistReducer(persistConfig, reducer);