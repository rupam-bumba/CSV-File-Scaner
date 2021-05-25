const usersDB = require("../model/users");

exports.post_create = (req, res, next) => {
  
  var users = new usersDB({
    _id: mongoose.Types.ObjectId(),
    Login_email: req.body.Login_email,
    Identifier: req.body.Identifier,
    One_time_password: req.body.One_time_password,
    Recovery_code: req.body.Recovery_code,
    First_name: req.body.First_name,
    Last_name: req.body.Last_name,
    Department: req.body.Department,
    Location: req.body.Location,
  });

  users
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        res: "contact added successfully",
      });
    })
    .catch((error) => {
      console.log(error);

      res.status(200).json({
        res: "something going wrong",
      });
    });
};
