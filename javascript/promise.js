var promiseObject = new Promise(function (resolve, reject) {
  resolve("kabir");
});

promiseObject
  .then(function (sucessdata) {
    console.log("then", sucessdata);
  })
  .catch(function (errordata) {
    console.log("catch", errordata);
  });
