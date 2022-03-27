import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, {}, composeEnhancers);

const persistor = persistStore(store);

export { store, persistor };