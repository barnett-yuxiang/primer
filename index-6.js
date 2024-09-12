function writeMessage(message) {
  console.log(`${this.greeting}, ${message}`);
}

greeting = "Hello";

writeMessage("It is sunny today");
writeMessage.call(global, "It is sunny today");
