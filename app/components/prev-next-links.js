import Ember from 'ember';

export default Ember.Component.extend({
  beyondFirstPage: Ember.computed('page', function() {
    if (this.get('page.page') > 1) {
      return true;
    } else {
      return false;
    }
  }),
  notLastPage: Ember.computed('page', 'totalCount', function() {
    var currentTotalOnPage = (this.get('page.page')-1) * this.get('page.per_page') + this.get('page.count');
    console.log(currentTotalOnPage);
    var totalTotal = this.get('totalCount');
    console.log(totalTotal);
    if (currentTotalOnPage===totalTotal) {
      return false;
    } else {
      return true;
    }
  }),
  previous: Ember.computed('page', function() {
    return this.get('page.page') - 1;
  }),
  next: Ember.computed('page', function() {
    return this.get('page.page') + 1;
  })
});
