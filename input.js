let connection;

const handleUserInput = function (data) {
  if (data === "\u0003"){
    console.log("Quit the game")
    process.exit();
  }
  if (data === "w") {
    connection.write('Move: up');
    connection.write('Say: i');
  }
  if (data === "a") {
    connection.write('Move: left');
    connection.write('Say: ma');
  }
  if (data === "s") {
    connection.write('Move: down');
    connection.write('Say: eat');
  }
  if (data === "d") {
    connection.write('Move: right');
    connection.write('Say: you');
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput}