const usersDB = require("../model/users");

exports.delete_remove = (req, res, next) => {
  usersDB
  .deleteOne({ _id : req.body._id })
  .then((result) => {
    console.log(result);
    res.status(200).json({
      res: result,
    });
  })
  .catch((error) => {
    console.log(error);
    res.status(200).json({
      res: "something going wrong",
    });
  });
  
  };
  