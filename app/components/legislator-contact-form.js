import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipcodeLookup() {
      var params = {
        zipcode: this.get('zipcode')
      };
      this.sendAction('zipcodeLookup', params);
    }
  }
});
