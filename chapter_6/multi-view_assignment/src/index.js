import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import './index.css';
import Header from './Header';
import App from './App';
import About from './About';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Router history={browserHistory}>
                    <Route path="/" component={Header}>
                        <IndexRoute component={App} />
                        <Route path="to-do" component={App} />
                        <Route path="about" component={About} />
                    </Route>
                </Router> , document.getElementById('app'));

registerServiceWorker();
