const getHeaders = data => {

    let headers = [];

    for (const header in data.headers) {
        headers.push(header);
    }

    return headers
};

const getContentHeader = (data, header) => {

    const headers = data.headers;

    if (!headers.hasOwnProperty(header)) {
        throw new Error('No such header')
    }

    return headers[header];
};

module.exports = {
    getHeaders,
    getContentHeader
};