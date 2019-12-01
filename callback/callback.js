///////////////// Callback function /////////////////////
// const doSomething = callback => {
//   setTimeout(() => {
//     callback(undefined, "normal message");
//   }, 2000);
// };

// doSomething((err, res) => {
//   if (err) return console.log("ops:", err);
//   console.log("form res:", res);
// });

///////////////// Promise function /////////////////////
const doSomething = new Promise((resolve, reject) => {
  setTimeout(() => {
    let aa = [1, 3, 5];
    aa === undefined ? reject(new Error("siwen error")) : resolve(aa);
  }, 2000);
});

doSomething
  .then(resulte => console.log("Success!", resulte))
  .catch(error => console.error(error));

///////////////// Async function /////////////////////
async function getData(params) {
  try {
    const resulte = await doSomething;
    console.log("Success!", resulte);
  } catch (error) {
    console.error(error);
  }
}

// getData();
