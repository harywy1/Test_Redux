import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom'
import store from './redux/store'
import Results from './components/results'
import Collection from './components/appBar/Collection'

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Results} />
                <Route path="/collection" component={Collection} />
                <Redirect from="/" to="/" />
            </Switch>
        </BrowserRouter>
    </Provider>
    
);

ReactDOM.render(Root, document.getElementById('root'));
