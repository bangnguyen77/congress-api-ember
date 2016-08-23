import Ember from 'ember';

export function partyName(params) {
  var partyAbbreviation = params[0];
  if (partyAbbreviation === "D") {
    return "Democrat";
  } else if (partyAbbreviation === "R") {
    return "Republican";
  } else {
    alert("It's a two party system.");
    return "Independent";
  }
}

export default Ember.Helper.helper(partyName);
