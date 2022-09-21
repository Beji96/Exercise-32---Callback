function sayHelloName(second) {
  console.log("Hello");
  setTimeout(second, 1220);
}
function printName() {
  console.log("Flavius");
}
sayHelloName(printName);
