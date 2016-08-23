import Ember from 'ember';

export function contactLink(params) {
  var link = params[0];
  var html = "<a href='" + link + "' class='contact'>" + link + "</a>";
  return Ember.String.htmlSafe(html);
}

export default Ember.Helper.helper(contactLink);
