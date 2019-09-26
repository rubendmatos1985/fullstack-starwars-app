import { createStore, Store, AnyAction } from 'redux';
import rootReducer from './reducer';

const store:Store<any, AnyAction> = createStore(
    rootReducer,
    {}
)


export default store;