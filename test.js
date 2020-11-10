let sut = require('./');
let assert = require('assert');

let inputs = [
    { dir: '/', input: 'us', expect: 'usr' },
    { dir: '/', input: 'bim', expect: 'bin' },
    { dir: '/Users', input: 'Gust', expect: 'Guest' },
];

for (let input of inputs) {
    assert.deepEqual(sut(input.dir, input.input), input.expect);
}
