const url = require('url');

const leerUrl = (urlStr) => {
    try {
        const { protocol, host, pathname } = url.parse(urlStr, true, true);
        console.log(`
        ${protocol}
        ${host}
        ${pathname}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    leerUrl
}