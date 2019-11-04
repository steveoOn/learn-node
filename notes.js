const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "my notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length !== 0) {
    console.log(chalk.red.inverse("Note title is taken!"));
  } else {
    notes.push({
      title,
      body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse(`Success! add a new note ${title}`));
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const remove = notes.filter(note => note.title !== title);
  if (remove.length === notes.length) {
    console.log(chalk.red.inverse(`No note found with title of ${title}`));
  } else {
    saveNotes(remove);
    console.log(chalk.green.inverse(`Removed note of ${title}`));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  removeNote
};
