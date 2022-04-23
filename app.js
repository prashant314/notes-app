const notes = require('./notes.js');
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list commands

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        // console.log('Title: ' + argv.title);
        // console.log('Description: ' + argv.body);
        notes.addNote(argv.title, argv.body);
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title)
    }
})

//Create remove command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler () {
        notes.listNotes()
    }
})

//Create remove command
yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.readNote(argv.title);
    }
})

yargs.parse()