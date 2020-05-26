import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import { configureStore } from './store';

/*IMports used for just the persistants of state*/
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

const store = configureStore();
const persistor = persistStore(store);

ReactDom.render(
    <Provider store={store}>
        <PersistGate
            loading={<div>Loading...</div>}//view displayed when app is loading instead of application        
            persistor={persistor}>
            <App />
        </PersistGate>

    </Provider>,
    document.getElementById('root')
)