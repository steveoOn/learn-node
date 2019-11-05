const yargs = require("yargs");
const { addNote, removeNote, listNotes, readNote } = require("./notes");

// yargs.version()

yargs.command({
  command: "add",
  describe: "添加新的笔记",
  builder: {
    title: {
      describe: "笔记标题",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "笔记内容",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "删除笔记",
  builder: {
    title: {
      describe: "笔记标题",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: " 列出笔记",
  handler() {
    listNotes();
  }
});

yargs.command({
  command: "read",
  describe: "读取笔记",
  builder: {
    title: {
      describe: "笔记标题",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    readNote(argv.title);
  }
});

yargs.parse();

// console.log(yargs.argv);
