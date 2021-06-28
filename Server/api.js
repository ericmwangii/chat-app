const express = require("express");
const router = express.Router();
const Pusher = require("pusher");
const dotenv = require("dotenv");
dotenv.config();

router.get("/api", (request, response) => {
  response.send("all good");
});

const pusher = new Pusher({
  appId: process.env.APPID,
  key: process.env.KEY,
  secret: process.env.secret,
});

//auth
router.post("/pusher/auth", (request, response) => {
  const socketId = request.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  response.send(auth);
});

module.exports = router;
