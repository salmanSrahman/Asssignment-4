const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.url == "/") {
    const data = fs.readFileSync("home.html");
    if (data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  }
  else if (req.url == "/about") {
    const data = fs.readFileSync("about.html");
    if (data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  }
  if (req.url == "/") {
    const data = fs.readFileSync("home.html");
    if (data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  }



});

server.listen(5000);
console.log("Server listening on port 5000");
