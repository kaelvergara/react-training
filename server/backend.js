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

const persons = [
  { id: 1, firstName: 'Tim', lastName: 'Duncan', age: 18, gender: 'Male', isBusy: false, hobbies: ['basketball','swimming']},
  { id: 2, firstName: 'Tom', lastName: 'Brady', age: 42, gender: 'Male', isBusy: true, hobbies: ['football','reading']},
  { id: 3, firstName: 'Lisa', lastName: 'Leslie', age: 18, gender: 'Female', isBusy: false, hobbies: ['basketball','reading']}
]

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

// persons
app.get('/persons', function (req, res) {
  sleep(2000).then(() => {
    res.send(persons)
  });
})


app.listen(port, () => {
  console.log(`BE listening at http://localhost:${port}`)
})