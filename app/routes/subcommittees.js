import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&apikey=31f03ae2864645cb86228c245d54106a&parent_committee_id=' + params.committee_id;
    console.log(params);
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON.results);
      return responseJSON.results;
    })
  }
});
