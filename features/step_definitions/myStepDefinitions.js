module.exports = function() {
  this.World = require('../support/world').World;
  this.Given(/^the calculator is cleared$/, function(callback) {
    this.clearCalculator();
    callback();
  });

  this.When(/^I add (-?\d+) and (-?\d+)$/, function(arg1, arg2, callback) {
    this.add(arg1);
    this.add(arg2);
    callback();
  });

  this.When(/^then add (-?\d+)$/, function(arg1, callback) {
    this.add(arg1);
    callback();
  });

  this.When(/^I subtract (-?\d+) from (-?\d+)$/, function(arg1, arg2, callback) {
    // we deliberately switch arg2 and arg1 here because of the order of operation
    // arg1 subtracted from arg2, so "arg2 minus arg1"
    this.add(arg2);
    this.substract(arg1);
    callback();
  });

  this.When(/^then subtract (-?\d+)$/, function(arg1, callback) {
    this.substract(arg1);
    callback();
  });

  this.Then(/^the result should be (-?\d+)$/, function(arg1, callback) {

    // Write code here that turns the phrase above into concrete actions
    const result = this.result();
    if (result === Number(arg1)) {
      callback();
    } else {
      callback.fail(new Error(`Expected sum to be ${arg1}`));
    }
  });

};
