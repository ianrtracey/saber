var express = require('express')
var bodyParser = require('body-parser');
var app = express();

app.use( bodyParser.json() );


var flows = [
  { name: "New Issue Flow",
    command: 'new issue',
    description: "Creates a new issue on Github issue"
  },
  { name: "New feature",
    command: 'new feature',
    description: "Creates a new feature card on trello, switches to a new feature branch on git with the same name"
  }
];


var flowSchemas = [

];


app.post('/flow/new', function (req, res) {
    console.log('new flows');
    console.dir(req.body);
    flow = req.body;
    flowSchemas.push(flow);
    res.json('success');
});

app.get('/flow', function (req, res) {
  res.json(JSON.stringify(flowSchemas));
});

// app.get('/flow', function(req, res) {
//   res.send([
// });

app.listen(3000, function () {
    console.log('Saber listening on port 3000')
})
