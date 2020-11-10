let cli = require('commander');
let program = require('./');

cli.option('-d, --dir <type>', 'Directory');
cli.option('-i, --input <type>', 'Input');
cli.parse(process.argv);

try {
    let output = cli.dir === undefined && cli.dir === undefined ?
        program(process.argv[2], process.argv[3]) :
        program(cli.dir, cli.input);
    process.stdout.write(output);
} catch (e) {
    process.stdout.write(cli.help());
}
