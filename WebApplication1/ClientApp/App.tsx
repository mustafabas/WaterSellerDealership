import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import {Home} from './src/pages/index';
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from "./src/redux/store";
const HotApp = hot(module)(Home);

ReactDOM.render(
    <BrowserRouter>
    <Provider store={configureStore().store}>
    <PersistGate loading={null} persistor={configureStore().persistor}>
          <HotApp />
</PersistGate>
</Provider>
</BrowserRouter>
, 

document.getElementById('root'));
