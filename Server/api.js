const express = require("express");
const router = express.Router();
const Pusher = require("pusher");
const dotenv = require("dotenv");
const shortId = require("shortid");
dotenv.config();

router.get("/api", (request, response) => {
  response.send("all good");
});

const pusher = new Pusher({
  appId: process.env.APPID,
  key: process.env.KEY,
  secret: process.env.SECRET,
  cluster: "mt1",
  forceTLs: true,
});

router.post("/message", async (request, response) => {
  const chat = {
    ...request.body,
    id: shortId.generate(),
    createdAt: new Date().toISOString(),
  };

  pusher.trigger("chat-group", "chat", chat);
  response.send(chat);
});

router.post("/join", (request, response) => {
  const chat = {
    ...request.body,
    id: shortId.generate(),
    type: "joined",
    createdAt: new Date().toISOString(),
  };

  pusher.trigger("chat-group", "chat", chat);
  response.send(chat);
});

module.exports = router;
