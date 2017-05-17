import React from 'react';
import ReactDom from 'react-dom';
// import routers from './routes';
import App from './components/App';
import './global.styl';
//import Router from 'react-router';
import {AppContainer} from 'react-hot-loader';

const render = (Component) => {
    ReactDom.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('react')
    )
};

render(App);

if (module.hot) {
    // module.hot.accept('./components/App', () => {
    // render(App);
    // });
    module.hot.accept();
}