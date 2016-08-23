import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('legislator-contact-results', {path: '/legislator-contact-results/:zipcode'});
  this.route('committees', {path: '/committees/:page'});
  this.route('subcommittees', {path: '/subcommittees/:committee_id'});
  this.route('bills', {path: '/bills/:page'});
});

export default Router;
