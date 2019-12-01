const doSomething = callback => {
  setTimeout(() => {
    callback(undefined, "normal message");
  }, 2000);
};

doSomething((err, res) => {
  if (err) return console.log("ops:", err);
  console.log("form res:", res);
});
