import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App/App';
import Task from './App/Task'
import Section from './App/Section'

import {BrowserRouter,Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={App}/>
            <Route path='/task' component={Task}/>
            <Route path='/task/section' component={Section}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
