import {API_URL, ApiError} from "./ApiError";
import {getToken} from "../utils/Common";

// API wrapper function
const fetchResource = (path, userOptions = {}) => {
    // Define default options
    const defaultOptions = {};

    /** TODO: Figure out how to setHeaders and set the Token, this is just a sample to insert it for now */
    // Define default headers
    const defaultHeaders = {
        Authorization: getToken() || null
    };

    const options = {
        // Merge options
        ...defaultOptions,
        ...userOptions,
        // Merge headers
        headers: {
            ...defaultHeaders,
            ...userOptions.headers,
        },
    };

    // Build Url
    const url = `${ API_URL }${ path }`;

    // Detect is we are uploading a file
    const isFile = options.body instanceof File;

    // Stringify JSON data
    // If body is not a file
    if (options.body && typeof options.body === 'object' && !isFile) {
        options.body = JSON.stringify(options.body);
    }

    // Variable which will be used for storing response
    let response = null;

    return fetch(url, options)
        .then(responseObject => {
            // Saving response for later use in lower scopes
            response = responseObject;

            // HTTP unauthorized
            if (response.status === 401) {
                // Handle unauthorized requests
                // Maybe redirect to login page?
            }

            // Check for error HTTP error codes
            if (response.status < 200 || response.status >= 300) {
                // Get response as text
                return response.text();
            }

            // Get response as json
            return response.json();
        })
        // "parsedResponse" will be either text or javascript object depending if
        // "response.text()" or "response.json()" got called in the upper scope
        .then(parsedResponse => {
            // Check for HTTP error codes
            if (response.status < 200 || response.status >= 300) {
                // Throw error
                throw parsedResponse;
            }

            // Request succeeded
            return parsedResponse;
        })
        .catch(error => {
            // Throw custom API error
            // If response exists it means HTTP error occurred
            if (response) {
                throw new ApiError(`Request failed with status ${ response.status }.`, error, response.status);
            } else {
                throw new ApiError(error, null, 'REQUEST_FAILED');
            }
        });
};

export {fetchResource};