const express = require("express");
const router = express.Router();
const agent = require("./agent"); 
const openai = require("./openai");

router.get("/recommendation", async (req, res) => {
  try {
    const response = await agent(
      "Please give internet's famous existing 3 health insurance blogs, famous existing 2 nutrition blogs and famous existing  3 importance of physical activities blogs.  Give the summary of blog and a url to that internet blog (please make sure this url should exist)."
    );
    res.json({ recommendation: response });
  } catch (error) {
    console.error("Error getting recommendation:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




module.exports = router;
