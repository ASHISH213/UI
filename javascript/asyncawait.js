function createPromise() {
  return new Promise(function (resolve, reject) {
    resolve({
      status: true,
      data: [{ name: "raj" }, { name: "ashish" }],
    });
  });
}
async function catchPromise() {
  var responseData = await createPromise();
  console.log(responseData);
}
catchPromise();
