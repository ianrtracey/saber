var API = require('./api.js');
var Flow = require('./models/Flow.js');

module.exports = {

  process: function(args, callback) {
    if (args._[1] == "flow") {
      flowHandler(args, callback);
    }
  }
};

function flowHandler(argv, callback) {
  if (argv._[0] == "new") {
    API.newFlow(Flow.create(argv));
  }
  if (argv._[0] == "list") {
    console.log('get flows');
    API.getFlows.end(function(err, res) {
      if (err) {
        console.err(err);
        return;
      }
      console.log('body');
      callback(JSON.parse(res.body));
    });
  }
}

