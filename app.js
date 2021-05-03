const express = require("express");
const app = express();

// middlewear timer

function logger(req, res, next) {
  var d = new Date();
  const day = d.getDay();
  const hour = d.getHours();
  if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
    next();
  } else {
    res.sendFile(__dirname + "/Public/OutService.html");
  }
}

app.use(logger);

//Global middlewear

app.use(express.static("Public"));

// Server creating

const port = 7000;
app.listen(port, (error) => {
  error
    ? console.log(error)
    : console.log(`the server is running on port http://localhost:${port}`);
});
