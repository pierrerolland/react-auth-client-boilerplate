import config from '../config.json';

export default class Model {
    fetch(uri, method, body, redirectOn401 = true) {
        const headers = {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        };

        if (!body instanceof FormData) {
            headers['Content-Type'] = 'application/json';
        }

        return fetch(`${config.api}/${uri}`, {
            method,
            body: body ? (body instanceof FormData ? body : JSON.stringify(body)) : null,
            headers
        }).then(response => response.ok ?
            (response.status !== 204 ? response.json() : Promise.resolve()) :
            Promise.reject(response)
        ).catch(errorResponse => {
            if (redirectOn401 && errorResponse.status === 401) {
                localStorage.clear();
                window.location = '/';
            } else {
                return Promise.reject(errorResponse);
            }
        });
    }

    get(uri, redirectOn401 = true) {
        return this.fetch(uri, 'GET', null, redirectOn401);
    }

    post(uri, body, redirectOn401 = true) {
        return this.fetch(uri, 'POST', body, redirectOn401);
    }

    put(uri, body, redirectOn401 = true) {
        return this.fetch(uri, 'PUT', body, redirectOn401);
    }

    del(uri, redirectOn401 = true) {
        return this.fetch(uri, 'DELETE', null, redirectOn401);
    }
};
