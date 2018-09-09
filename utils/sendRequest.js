const request = require('request-promise-native');

const sendRestRequestWithHeader = data => {
    const options = {
        uri: data.uri,
        method: data.method,
        headers: data.headers,
        json: true,
        resolveWithFullResponse: true
    };

    return request(options)
        .then(response => {
            return response;
        })
        .catch(err => {throw new Error(err)});
};

module.exports = sendRestRequestWithHeader;
