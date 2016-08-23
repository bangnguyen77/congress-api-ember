import Ember from 'ember';

export default Ember.Component.extend({
  selectedBill: null,
  actions: {
    details(bill) {
      this.set('selectedBill', bill);
    }
  }
});
