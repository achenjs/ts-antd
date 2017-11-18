import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './static/css/reset.css';
// import 'antd-mobile/dist/antd-mobile.css';
import './static/css/common.scss';

// import { Provider } from 'react-redux';
import RouteMap from './router';
// import configureStore from './store/configureStore';
//  创建 Redux 的 store 对象
// const store = configureStore();

ReactDOM.render(
  // <Provider store={store}>
  <RouteMap />,
  // </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
