/**
 * FlowController
 *
 * @description :: Server-side logic for managing flows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getFlows: function(req, res) {
    return res.json({ flows: ['a','b','c'] });
  }
};

