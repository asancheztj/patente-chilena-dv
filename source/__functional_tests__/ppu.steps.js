const {defineSupportCode} = require('cucumber');
const Ppu = require('../ppu');
const expect = require('expect');


defineSupportCode(function({Given, Then, When}) {

  Given(/^a valid (.+)$/, function (ppu, callback) {
    this.ppu = ppu;
    callback();
  });

  When(/^generate the DV$/, function (callback) {
    console.log(JSON.stringify(this.generatedPpu));
    this.generatedPpu = new Ppu(this.ppu);
    callback();
  });

  Then(/^should have the respective (.+) - DV$/, function (dv, callback) {
    console.log(JSON.stringify(this.generatedPpu));

    expect(this.generatedPpu.dv).toBe(dv);
    callback();
  });

  Then(/^should have the respective (.+) - Format$/, function (format, callback) {
    console.log(JSON.stringify(this.generatedPpu));

    expect(this.generatedPpu.format.type).toBe(format);
    callback();
  });

});
