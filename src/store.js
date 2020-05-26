import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todos } from './ToDos/reducers';

/*Next 3 imports are used for maintaining state during refresh.*/
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //defaults to local storage on the web.
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

//imports after installing thunk procedures
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//hook it up to the redux store.
const reducers = {
    todos,   
};

// how to save and where to store data.
const persistConfig={
    key:'root',
    storage,//uses local storage on the web
    stateReconciler:autoMergeLevel2,//tells redux persist how to reconcil intial and restored states 
}

//put reducers into a form that we can pass to store
const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig,rootReducer);

export const configureStore = () => createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);