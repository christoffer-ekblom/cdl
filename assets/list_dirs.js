let fs = require('fs');

module.exports = path => fs.readdirSync(path, { withFileTypes: true }).reduce((a, c) => {
    c.isDirectory() && a.push(c.name);
    return a;
}, [])
