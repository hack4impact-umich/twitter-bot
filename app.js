// Testing github
const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
const app = express();
//Here we are configuring express to use body-parser as middle-ware.
//app.use(bodyParser.urlencoded({ extended: false }));
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//app.use(bodyParser.json());
var jsonParser = bodyParser.json()
router.post('/tweets',(request,response) => {
   //code to perform particular action.
   //To access POST variable use req.body()methods.
    console.log(request.body);
});

app.post('/tweets', jsonParser, function (request, response) {
    response.send('welcome, ' + request.body)
  })

// add router in the Express app.
app.use("/tweets", router);
app.use('/tweet', express.static('public/tweet'))

app.listen(3000)