var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = require('cli-spinner').Spinner;
var GitHubApi   = require('github');
var _           = require('lodash');
var git         = require('simple-git')();
var touch       = require('touch');
var fs          = require('fs');



function getCredentials(callback) {
  var questions = [
  ];
}

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Lightning', { horizontalLayout: 'full' })
  )
);


var spinner = new Spinner("%s processing...");
spinner.setSpinnerString(20);
spinner.start();

