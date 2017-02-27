#!/usr/bin/env node

var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = require('cli-spinner').Spinner;
var GitHubApi   = require('github');
var _           = require('underscore');
var git         = require('simple-git')();
var touch       = require('touch');
var fs          = require('fs');
var argv   = require('minimist')(process.argv.slice(2));
var CommandLineHandler = require('./CommandLineHandler');
var request = require('superagent');

var issueFlow = require('./saber/flow-templates/issue-flow.js');

function getFlowSchemaDetails(flow, callback) {
  var questions = _.map(_.pairs(flow.schema), function(item) {
    return {
      name: item[0],
      type: 'input',
      message: item[0],
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please provide an email';
        }
    }}
  });
  inquirer.prompt(questions).then(callback);
}



function getCredentials(callback) {
  var questions = [
    {
      name: 'email',
      type: 'input',
      message: 'Please provide your login email',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please provide an email';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password: ',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter password.';
        }
      }
    }
  ];
  inquirer.prompt(questions).then(callback);
}


getFlowSchemaDetails(issueFlow, function(res) {
  request
    .post(issueFlow.webhookUrl)
    .send({schema: res})
    .end(function(err, res){
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(res.body);
    });
});

// if (argv._.length > 0) {
//   CommandLineHandler.process(argv, function(result) {
//     console.log(
//       chalk.yellow('=== Flows ===')
//     );
//     _.each(result, function(item) {
//         console.log(item);
//     })
//   });
// } else {
//
//
// }


// var spinner = new Spinner("%s processing...");
// spinner.setSpinnerString(20);
// spinner.start();

