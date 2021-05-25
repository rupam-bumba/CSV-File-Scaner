module.exports = (req, res, next) => {
  if (req.headers.seqcode === process.env.SEQURITY_CODE) {
    return next()
  } else {
      const err = new Error("code not match")
   return next(err)
  } 
};
