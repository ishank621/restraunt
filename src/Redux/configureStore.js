import { createStore } from 'redux';//Allows to create Redux store
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer, 
        initialState
    );

    return store;
}

