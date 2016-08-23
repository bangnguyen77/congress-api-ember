import Ember from 'ember';

// congress.api.sunlightfoundation.com/committees?subcommittee=false&apikey=31f03ae2864645cb86228c245d54106a
export default Ember.Route.extend({
  beyondFirstPage: true,
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=false&apikey=31f03ae2864645cb86228c245d54106a&page=' + params.page;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      console.log(responseJSON);
      return responseJSON;
    });
  }
});
