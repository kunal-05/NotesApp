import fs from 'fs'
import chalk from 'chalk'


export function addNote(title, body){
    const notes = loadNotes()
    const duplicate_note = notes.find((note)=> note.title === title)
    debugger
    if (!duplicate_note)
    {
        notes.push({
            "title": title,
            "body": body
        })
        saveNotes(notes)
        console.log(chalk.greenBright.inverse('Note added!'))
    }
    else{
        console.log(chalk.redBright.inverse('Note with same title already exists. Please use different title!'))
    }
}


export function removeNote(title){
    const notes = loadNotes()
    const keep_notes = notes.filter(function(note){
        return note.title !== title
    })
    if (notes.length > keep_notes.length){
        saveNotes(keep_notes)
        console.log(chalk.greenBright.inverse('Note with title '+ chalk.italic(title)+' removed successfully!'))
    }
    else{
        console.log(chalk.redBright.inverse('No note found with title '+ chalk.italic(title)))
    }
    
}


export function listNotes(){
    const all_notes = loadNotes()
    if(all_notes.length!==0){
        console.log(chalk.green.inverse('Listing all notes'))
        all_notes.forEach(element => {
            console.log(element.title)
        });
    }
    else{
        console.log(chalk.redBright.inverse("No notes were found!"))
    }

}


export function readNote(title){
    const notes = loadNotes()
    const get_note = notes.find((note)=> note.title === title)
    if (get_note)
    {
        console.log(chalk.inverse.bold(get_note.title))
        console.log(get_note.body)
    }
    else{
        console.log(chalk.redBright.inverse('No note was found with title '+ title))
    }
}


const saveNotes = (notes)=>{
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('data_storage.json', dataJson)

}


const loadNotes = function(){
    try
    {
        const databuffer = fs.readFileSync('data_storage.json')
        const datajson = databuffer.toString()
        return JSON.parse(datajson)
    }
    catch(e)
    {
        return []
    }
    
}