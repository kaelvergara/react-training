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

const generateRandomNumber = (max) => {
  return Math.floor(Math.random(max) * max)
}

const persons = [
  { id: 1, firstName: 'Tim', lastName: 'Duncan', age: 18, gender: 'Male', isBusy: false, hobbies: ['Basketball','Swimming']},
  { id: 2, firstName: 'Tom', lastName: 'Brady', age: 42, gender: 'Male', isBusy: true, hobbies: ['Football','Reading']},
  { id: 3, firstName: 'Lisa', lastName: 'Leslie', age: 18, gender: 'Female', isBusy: false, hobbies: ['Basketball','Reading']}
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

// GET /persons
app.get('/persons', function (req, res) {
  sleep(2000).then(() => {
    res.send(persons)
  });
})

// POST /persons
app.post('/persons', function (req, res) {
  const person = {
    ...req.body,
    id: generateRandomNumber(100000)
  }
  persons.push(person)

  sleep(2000).then(() => {
    res.send('OK')
  });
})

// GET /persons/1
app.get('/persons/:id', function (req, res) {
  const id = parseInt(req.params.id)
  const person = persons.find(p => p.id === id)
  sleep(2000).then(() => {
    res.send(person)
  });
})

// PUT /persons/1
app.post('/persons/:id', function (req, res) {
  const id = parseInt(req.params.id)
  const index = persons.findIndex(p => p.id === id)
  persons[index] = {
    ...req.body,
    id
  }
  sleep(2000).then(() => {
    res.send('OK')
  });
})


app.listen(port, () => {
  console.log(`BE listening at http://localhost:${port}`)
})