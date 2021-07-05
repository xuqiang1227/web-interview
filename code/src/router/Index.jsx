import React from 'react';
import { Route } from 'react-router';
import Show from '../containers/Show';
import HelloWorld from '../components/chapter01/Session01';
import Others from './Others';

export default () => {
    let MyRouter = <HelloWorld />;
    return (
        <React.Fragment>
            <Show>
                <Route exact path="/" component={() => MyRouter} />
                <Route exact path="/01-01-01" component={HelloWorld} />
                <Route exact path="*" component={Others} />
            </Show>
        </React.Fragment>
    )
};