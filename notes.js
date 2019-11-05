const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  // instead of using filter(), the find() method is immediately stop mapping
  // when first matching title was found. upgrade capacity.

  // const duplicateNotes = notes.filter(note => note.title === title);
  const duplicateNote = notes.find(note => note.title === title);

  if (duplicateNote) {
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

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes is"));
  notes.forEach(note => console.log(note.title));
};

const readNote = title => {
  const notes = loadNotes();
  const findOneNote = notes.find(note => note.title === title);
  if (findOneNote) {
    console.log(chalk.blue.bold("Title:"), findOneNote.title);
    console.log(chalk.blue.bold("Body:"), findOneNote.body);
  } else {
    console.log(chalk.red.inverse("No note found!"));
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
  addNote,
  removeNote,
  listNotes,
  readNote
};
