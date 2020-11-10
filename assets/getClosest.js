let levenshtein = require('fast-levenshtein');

module.exports = (input, subDirs) => {
    let min = Infinity;
    let closest;

    for (let subDir of subDirs) {
        let distance = levenshtein.get(input, subDir);

        if (distance < min) {
            min = distance;
            closest = subDir;
        }
    }

    return closest;
};
