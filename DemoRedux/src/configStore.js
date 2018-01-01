import {createStore,applyMiddleware} from 'redux';
import reducer from '../src/reducers';
import thunk from 'redux-thunk';
export default confiStore = createStore(
    reducer,
    {},
    applyMiddleware(thunk)


);
