const express = require("express");
const router = express.Router();
const middleware = require("../middleware")


// POST _sample
const _sample = require("../controller/_sample");
router.post("/sample",middleware, _sample.post_sample);

// POST uploadcsv
const uploadcsv = require("../controller/uploadcsv");
router.post("/uploadcsv",middleware, uploadcsv.post_uploadcsv);

// POST create
const create = require("../controller/create");
router.post("/create",middleware, create.post_create);

// GET read
const read = require("../controller/read");
router.get("/read",middleware, read.get_read);

// PUT edit
const edit = require("../controller/edit");
router.put("/edit",middleware, edit.put_edit);

// DELETE remove
const remove = require("../controller/remove");
router.delete("/remove",middleware,  remove.delete_remove);

module.exports = router;
