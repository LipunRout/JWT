const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');

app.use(cookieParser());

app.get("/", (req, res) => {
  let token=jwt.sign({email:"lipun001@gmail.com"},"Lipun")
  res.cookie("token",token);

  res.send("Workinggg...");
});

app.get("/read", (req, res) => {
  let data=jwt.verify(req.cookies.token,"Lipun")
  console.log(data)
  res.send('true');
});

app.get("/dec", (req, res) => {
  bcrypt.compare(
    "Lipun",
    "$2b$10$F3G1WkRyfhTUgZ5tpqKPeoPot4bK4U0xA.W6jR3plWq58mfI7otW",
    (err, result) => {

      if(err) {console.log('error password doesnot matchh');
        res.send('Erorr');
      }
      console.log(result);
      res.send(result ? true:false)
    }
  );
});

app.listen(3000, () => console.log("running..."));
