const usersDB = require("../model/users");

exports.put_edit = (req, res, next) => {
 
  usersDB
    .findOneAndUpdate(
      { _id: req.body._id },
      {
        $set: {
          Login_email: req.body.Login_email,
          Identifier: req.body.Identifier,
          One_time_password: req.body.One_time_password,
          Recovery_code: req.body.Recovery_code,
          First_name: req.body.First_name,
          Last_name: req.body.Last_name,
          Department: req.body.Department,
          Location: req.body.Location,
        },
      }
    )
    .then((result) => {
      res.status(200).json({
        result,
      });
    })
    .catch((error) => {
      return next(error);
    });

  };
