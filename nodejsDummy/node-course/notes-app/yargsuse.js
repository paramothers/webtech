const yargs = require('yargs');

console.log(yargs.argv);

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Remove a note');
    }
})