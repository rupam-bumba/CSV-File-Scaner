const usersDB = require("../model/users");
const multer = require("multer");
var csvparse = require("csv-parse");
var fs = require("fs");

var pramarray = [];

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "././uploads");
  },
  filename: function (req, file, cb) {
    cb(null, "targetfile");
  },
});

var upload = multer({ storage: storage }).single("csvfile");

exports.post_uploadcsv = (req, res, next) => {
  // console.log(req);

  upload(req, res, (err) => {
    console.log(req.file);

    if (err instanceof multer.MulterError) {
      res.status(400).json({
        err,
      });
    } else if (err) {
      res.status(400).json({
        err,
      });
    } else {
      fs.createReadStream(req.file.path)
        .pipe(csvparse({ delimiter: ";" }))
        .on("data", function (csvrow) {
          console.log(csvrow);

          // console.log("----------------");
          // console.log(csvrow[0]);
          // console.log(csvrow[1]);
          // console.log(csvrow[2]);
          // console.log(csvrow[3]);
          // console.log(csvrow[4]);
          // console.log(csvrow[5]);
          // console.log(csvrow[6]);
          // console.log(csvrow[7]);
          // console.log("----------------");

          let va = {
            Login_email: csvrow[0],
            Identifier: csvrow[1],
            One_time_password: csvrow[2],
            Recovery_code: csvrow[3],
            First_name: csvrow[4],
            Last_name: csvrow[5],
            Department: csvrow[6],
            Location: csvrow[7],
          };
          console.log(va);
          pramarray.push(va);
          console.log("----------------------");
          console.log(pramarray);

          usersDB
          .insertMany(pramarray)
          .then((result) => {
            res.status(400).json({
              result,
            });
          })
          .catch((error) => {
            res.status(400).json({
              error,
            });
          });
        });
    }
  });
};
