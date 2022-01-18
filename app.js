import yargs from 'yargs'
import {addNote, removeNote, listNotes, readNote} from './notes.js'
import validator from 'validator'
import { hideBin } from 'yargs/helpers'


//create add command
yargs(hideBin(process.argv)).command({
  command: 'Add',
  description:'Add a new note',
  builder:{
    title: {
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body: {
      describe:'Note body',
      demandOption:true,
      type:'string'
    }
  },
  handler : function(argv) {
    addNote(argv.title,argv.body)
  }
}).parse()


//remove command
yargs(hideBin(process.argv)).command({
  command: 'Remove',
  description:'Remove a note',
  builder:{
    title: {
      describe:'Provide Note title to remove',
      demandOption:true,
      type:'string'
    }
  },
  handler : function(argv) {
    removeNote(argv.title)
  }
}).parse()


//list command
yargs(hideBin(process.argv)).command({
  command: 'List',
  description:'List all note',
  handler : function() {
    listNotes()
  }
}).parse()


//read command
yargs(hideBin(process.argv)).command({
  command: 'Read',
  description:'Read a note',
  builder:{
    title: {
      describe:'Note title',
      demandOption:true,
      type:'string'
    }
  },
  handler : function(argv) {
    readNote(argv.title)
  }
}).parse()