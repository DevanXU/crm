import React from 'react'
import { Switch, Route } from 'react-router-dom';

class Resource extends React.Component {
    componentWillMount() {
        const {
            list,
            create,
            edit,
            show
        } = this.props;
    }

    render() {
        return (
            <Switch>
                {create && (
                    <Route
                        exact
                        path={`${match.url}/create`}
                    />
                )}
                {list && (
                    <Route
                        exact
                        path={`${match.url}/list`}
                    />
                )}
                {edit && (
                    <Route
                        exact
                        path={`${match.url}/edit`}
                    />
                )}
                {show && (
                    <Route
                        exact
                        path={`${match.url}/show`}
                    />
                )}
            </Switch>
        );
    }
}

export default Resource;