describe('Airport', function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    weather = {stormy: function(){}};
    airport = new Airport(weather);
    plane = jasmine.createSpyObj('plane', ['land']);
  });

describe('normal conditions', function() {

  beforeEach(function(){
    spyOn(weather, 'stormy').and.returnValue(false);
  });

  it("has no planes before plane has landed", function(){
    expect(airport._planes).toEqual([]);
  });

  it("updates planes array when called", function(){
    airport.receivePlane(plane);
    expect(airport._planes).toEqual([plane]);
  });

  it("ejects planes from _planes array", function() {
    airport.receivePlane(plane);
    airport.ejectPlane(plane);
    expect(airport._planes).toEqual([]);
  });

  it("has a default capacity", function() {
    expect(airport._CAPACITY).not.toBeUndefined();
  });

  it("capacity can be set", function() {
    airport.setCapacity(20);
    expect(airport._CAPACITY).toEqual(20);
  });

  it("cannot hold more planes than capacity", function() {
    for(var i = 0; i <= airport._CAPACITY; i++) {
      airport.receivePlane(plane);
      }
    expect(function() {airport.receivePlane(plane);}).toThrow("Capacity reached!");
  });

});

  describe('bad weather related guard cases for flying conditions', function() {

    beforeEach(function(){
      spyOn(weather, 'stormy').and.returnValue(true);
    });

    it("stops landing when stormy", function() {
      expect(function() {airport.receivePlane(plane);}).toThrow("No landing it's stormy!");
    });

    it("stops taking-off when stormy", function() {
      expect(function() {airport.ejectPlane(plane);}).toThrow("No flying it's stormy!");
    });

  });

});
