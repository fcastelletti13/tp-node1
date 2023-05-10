const url = require('url');

const leerUrl = (urlStr) => {

const { protocol, host, pathname } = url.parse(urlStr, true, true)
console.log(`
Protocol: ${protocol}
Host: ${host}
Path name: ${pathname}
`)

}

module.exports = {
leerUrl
}
