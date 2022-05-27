import {fetchResource} from './fetchResource';

class HttpClient {
    constructor(options = {}) {
        this._baseURL = options.baseURL || "";
        this._headers = options.headers || {};
    }

    async _fetchJSON(endpoint, options = {}) {
        // const res = await fetch(this._baseURL + endpoint, {
        //     ...options,
        //     headers: this._headers
        // });
        //
        // if (!res.ok) throw new Error(res.statusText);
        //
        // if (options.parseResponse !== false && res.status !== 204)
        //     return res.json();
        //
        // return undefined;

        return fetchResource(endpoint, options);
    }

    setHeader(key, value) {
        this._headers[key] = value;
        return this;
    }

    getHeader(key) {
        return this._headers[key];
    }

    setBasicAuth(username, password) {
        this._headers.Authorization = `Basic ${btoa(`${username}:${password}`)}`;
        return this;
    }

    setBearerAuth(token) {
        this._headers.Authorization = `Bearer ${token}`;
        return this;
    }

    get(endpoint, options = {}) {
        return this._fetchJSON(endpoint, {
            ...options,
            method: "GET"
        });
    }

    post(endpoint, body, options = {}) {
        return this._fetchJSON(endpoint, {
            ...options,
            body: body ? JSON.stringify(body) : undefined,
            method: "POST"
        });
    }

    put(endpoint, body, options = {}) {
        return this._fetchJSON(endpoint, {
            ...options,
            body: body ? JSON.stringify(body) : undefined,
            method: "PUT"
        });
    }

    patch(endpoint, operations, options = {}) {
        return this._fetchJSON(endpoint, {
            parseResponse: false,
            ...options,
            body: JSON.stringify(operations),
            method: "PATCH"
        });
    }

    delete(endpoint, options = {}) {
        return this._fetchJSON(endpoint, {
            parseResponse: false,
            ...options,
            method: "DELETE"
        });
    }
}

export default HttpClient;
