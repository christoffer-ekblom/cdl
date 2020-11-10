module.exports = (dir, input) => {
    let listDirs = require('./assets/list_dirs');
    let getClosest = require('./assets/getClosest');
    return getClosest(input, listDirs(dir));
};
