const printAddr = (string, callback) => {
    setTimeout(() => {
        console.log(string);
        callback ();
    }, 2000);
}

const getAddress = () => {
  printAddr("121 Worcester Rd", () => {
    printAddr("Fairhaven", () => {
      printAddr("NY 14228", () => {})
    })
  })
}
getAddress();
