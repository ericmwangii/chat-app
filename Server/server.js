const express = require("express");
const cors = require("cors");
const app = express();
const api = require("./api");

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//routes
app.get("/", (request, response) => {
  response.json("Hello");
});

//pusher
app.use("/", api);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
