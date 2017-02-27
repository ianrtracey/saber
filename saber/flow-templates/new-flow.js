var request = require('superagent');
var issueFlow = require('./issue-flow.js');

if (process.argv.length < 3) {
  console.log('must include webhook url');
  process.exit(1);
}
console.log(process.argv.length);
const webHookUrl = process.argv[2];

request
  .post(webHookUrl)
  .send(issueFlow)
  .end(function(err, res){
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(res.body);
  });
