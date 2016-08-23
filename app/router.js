import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('legislator-contact-results', {path: '/legislator-contact-results/:zipcode'});
});

export default Router;
