import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipcodeLookup(params) {
      this.transitionTo('legislator-contact-results', params.zipcode);
    }
  }
});
