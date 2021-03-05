const express = require("express");
const router = express.Router();

// @route      GET api/clients
// @desc       get available clients
// access      private
router.get("/", (req, res) => {
  res.json({ message: "get clients is running" });
});

// @route      POST api/clients
// @desc       create client data
// access      private
router.post("/", (req, res) => {
  res.json({ message: "post clients is running" });
});

// @route      PUT api/clients
// @desc       Update client data with Id
// access      private
router.put("/:id", (req, res) => {
  res.json({ message: "put clients is running" });
});

// @route      Delete api/clients
// @desc       delete client with Id
// access      private
router.delete("/:id", (req, res) => {
  res.json({ message: "delete clients is running" });
});

module.exports = router;
