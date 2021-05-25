const usersDB = require("../model/users");

exports.get_read = (req, res, next) => {
  
  usersDB
  .find({})
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
  



