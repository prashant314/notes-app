const fs = require('fs')

const getNotes = () => {
    return 'These are my notes'
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        
        saveNotes(notes);
        console.log('New note added!')
    } else {
        console.log('Note title is taken!')
    }

    
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title != title)
    if(notes.length === notesToKeep.length) {
        console.log('No note found!')
    } else {
        saveNotes(notesToKeep)
        console.log('Note removed!')
    }
    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log("======Your Notes=====")
    notes.forEach(note => {
        console.log("Title: "+ note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log("Title: " + title)
        console.log("Body: "+ note.body)
    } else {
        console.error("Note not found!")
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        console.log("Error Occured while loading notes..")
        return []
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

module.exports= {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes, 
    readNote: readNote
}