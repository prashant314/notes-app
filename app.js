// const fs = require('fs')
// const add = require('./utils.js')
// fs.writeFileSync('notes.txt','Author - Prashant.')
// fs.appendFileSync('notes.txt','Created on 10/11/20')
// const sum = add(2,6);
// console.log(sum);

const notes = require('./notes.js');
const yargs = require('yargs')

// console.log(notes); 
// console.log(process.argv);

// Customize yargs version
yargs.version('1.1.0')

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
    handler () {
        console.log('Reading the note');
    }
})

// add, remove, read, list


console.log(yargs.argv);