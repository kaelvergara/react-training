const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 4000

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/auth', function (req, res) {
  const { firstName, lastName } = req.body;

  if (firstName === 'foo' && lastName=== 'bar') {
    sleep(2000).then(() => {
      res.send()
    });
  } else {
    sleep(2000).then(() => {
      res.status(400).send()
    });
  }
})


app.listen(port, () => {
  console.log(`BE listening at http://localhost:${port}`)
})