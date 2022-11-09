const express = require("express");
const fs = require("fs");
// const { networkInterfaces } = require("os");
// const { stringify } = require("querystring");
const app = express();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send({ samir: "samior" });
// });
// app.post("/", (req, res) => {
//   res.send({ samir: "samior" });
// });
let tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`));
// console.log("tours ", tours);
let len = tours.length;
// console.log(`lendth = ${len}`);
app.get("/api/v1/tours", (req, res) => {
  // console.log("length 1", tours.length);
  res.status(200).json({
    // status: success,
    // tours: tours,
    dataa: len,
    data: {
      tours,
    },
  });
});

// get api by id?
app.get("/api/v1/tours/:id", (req, res) => {
  // console.log("length 1", tours.length);
  const id = req.params.id * 1;
  let newLen = len - 1;
  if (id > newLen) {
    res.status(404).send("invalid");
  }
  // console.log(id);
  tourByid = tours.find((ele) => ele.id === id);
  console.log(tourByid);
  // res.status(200).json({
  //   status: success,
  //   // tours: tours,
  //   dataa: len,
  // });
  res.send(tourByid);
});

//  post api
const newTour = {};
app.post("/api/v1/tours", (req, res) => {
  let id = [tours.length - 1] + 1;
  // console.log(id);
  // const newTour = tours.push(id);

  newTour.id = id;
  newTour.name = req.body.name;
  // newTour.id = id;
  //push array
  tours.push(newTour);

  newTour.name = req.body.name;
  // console.log("new Tour ...");

  fs.writeFile(
    `${__dirname}/tours-simple.json`,

    JSON.stringify(tours),

    (err) => {
      if (err) throw err;
    }
  );

  res.status(200).json({
    // status: success,
    // tours: tours,

    data: {
      tours: newTour,
    },
  });
});

let port = 7070;
app.listen(port, () => {
  console.log("server listening on port 7070");
});
