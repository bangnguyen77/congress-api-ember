import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=31f03ae2864645cb86228c245d54106a&zip=' + params.zipcode;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON);
     return responseJSON.results;
   });
  }
});
