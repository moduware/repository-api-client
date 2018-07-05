const assert = require('assert');

describe('getDriver()', () => {
  xit('Incorrect path should trigger not found exception');
  xit('Unreadable json should trigger bad format exception');
  xit('Missing type or version should trigger bad format exception');
  xit('Correct path should return driver object');
});

describe('makeBaseInfo()', () => {
  xit('Info contains type and version of driver');
  xit('Contains link to drivers list');
});

describe('Driver Commands', () => {
  describe('makeCommandsInfo()', () => {
    xit('Driver without commands return empty string');
    xit('Outputs title or name for every command');
    xit('Outputs correct example for command without arguments');
    xit('Outputs correct example for command with arguments');
    xit('Outputs table with command info');
    xit('Outputs command description');
    xit('Calls makeCommandsArgumentsInfo() for every command'); // Use "sinon" for it
  });
  
  describe('renderArgumentsForExample()', () => {
    xit('Command without arguments will return empty string');
    xit('Outputs correct example arguments string');
  });
  
  describe('makeCommandsArgumentsInfo()', () => {
    xit('Command without arguments will return empty string');
    xit('Outputs name and description for every command');
    xit('Calls formatArgumentValidation() for every argument that has validation');
    xit('Outputs none if there are no validation and - if there are no description');
  });
  
  describe('formatArgumentValidation()', () => {
    xit('Convert argument validation to human readable format');
  });
});

describe('Driver Data', () => {
  describe('makeDataInfo()', () => {
    xit('Driver without data return empty string');
    xit('Output title and name for every data field');
    xit('Contains if statement in JS example');
    xit('Contains table with info field info');
    xit('Contains info field description');
    xit('Calls makeDataVariablesInfo() for every data field');
  });

  describe('makeDataVariablesInfo()', () => {
    xit('Data field without variables will return empty string');
    xit('Calls makeDataVariablesExample()');
    xit('Outputs name, title and description for every command');
    xit('Outputs - instead of title and description if they are not specified');
    xit('Outputs * if variable has no states');
    xit('Outputs all possible states if they are specified for a variable')
  });

  describe('makeDataVariablesExample()', () => {
    xit('Data field without variables will return empty string');
    xit('Output console.log for all variables without states');
    xit('Output switch for all variables with states');
    xit('Outputs state cases for every variable with states');
  });

});