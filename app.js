const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./server/routes");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

routes(app);

app.get("*", (req, res) =>
  res.status(201).send({ message: "Welcome to the default API route." })
);

app.listen(port, () => console.log(`Listening to port ${port}.`));
