const fs = require("fs");
const http = require("http");
const url = require("url");

// const inputTxt = fs.readFileSync("./txt/input.txt", "UTF-8");
// console.log(inputTxt);

// const outTxt = `my adress : ${inputTxt} \n created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", outTxt);
// console.log(`hello this is only for text `);

// fs.readFile("./txt/input.txt", "UTF-8", (err, data) => {
//   console.log(data);
//   fs.readFile("./txt/output.txt", "UTF-8", (err, data2) => {
//     console.log(data2);
//     fs.writeFile("./txt/final.txt", data2 + "\n " + data, (err) => {});
//   });
// });
// console.log("written");

// creating server

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url === "/" || req.url === "/overview") {
    fs.readFile(
      `${__dirname}/templates/template-overview.html`,
      "utf-8",
      (err, data) => {
        // JSON.parse(data);
        console.log(data);
        res.end(data);
      }
    );
    // res.end("<h1>This is over view</h1>");
  } else if (req.url === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      // console.log(data);
      res.end(data);
    });
    // res.end("api");
  } else {
    // console.log("page not found");
    res.end("page not found");
  }
  // res.end("hello from server");
});
const port = 8000;
server.listen(port);
console.log(" sever listening at port 8000");
