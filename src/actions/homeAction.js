import { FETCH_APPS } from './types'
import * as uri from './uri'

export const fetchApps = () => dispatch => {
    fetch(uri.URI_FETCH_APPS)
        .then(res => res.json())
        .then(apps =>
            dispatch({
                type: FETCH_APPS,
                payload: apps
            })
        );
}

