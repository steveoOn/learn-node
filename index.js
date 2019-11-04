const fs = require("fs");

// const book = {
//   title: "this is siwen",
//   author: "siwen ren"
// };

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

function changeJSON(file) {
  const dataBuffer = fs.readFileSync(file);
  const dataToString = dataBuffer.toString();
  let data = JSON.parse(dataToString);
  data.name = "siwen";
  data.age = "32";
  const newJSON = JSON.stringify(data);
  fs.writeFileSync("1-json.json", newJSON);
  //   console.log(data.age);
}

changeJSON("1-json.json");
