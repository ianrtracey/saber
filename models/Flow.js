var _ = require('underscore');

var requiredKeys = ['name', 'description', 'schema'];

var create = function(args) {
  return {
    name: args.name,
    description: args.description,
    schema: args.schema.match(/\S+/g) || []
  }
}

module.exports = {
  create: create
}
