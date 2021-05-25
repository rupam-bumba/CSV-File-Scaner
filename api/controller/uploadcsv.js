const usersDB = require("../model/users");
const multer = require("multer");
var csvparse = require("csv-parse");
var fs = require("fs");
var pramarray = [];

// storage engin
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "././uploads");
  },
  filename: function (req, file, cb) {
    cb(null, "targetfile");
  },
});

// upload funtion
var upload = multer({ storage: storage }).single("csvfile");

exports.post_uploadcsv = (req, res, next) => {
  //calling upload funtion
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
      //hold file in buffer
      fs.createReadStream(req.file.path)
        .pipe(csvparse({ delimiter: ";" })) // csv format
        .on("data", function (csvrow) {
          console.log(csvrow);
          // keeping record in a object
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
          console.log(pramarray);

          // inserting record in database
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
