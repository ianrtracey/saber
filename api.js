var request = require('superagent');

const API = "http://localhost:3000";

var endpoints = {
  flows: {
    list: API + '/flow',
    new: API + "/flow/new"
  }
};


var requestTypes = {
  get: function(endpoint) {
    return request.get(endpoint)
  }
}


module.exports = {
  newFlow: function(flow) {
    console.dir(flow);
    request.post(endpoints.flows.new)
      .send(flow)
      .end(function(err, res) {
        if (err) {
          console.err(err);
        } else {
          console.log(res.body);
        }
      });
  },

  getFlows: requestTypes.get(endpoints.flows.list)
};
