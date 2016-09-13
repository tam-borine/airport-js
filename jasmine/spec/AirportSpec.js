describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
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
  })

  it("capacity can be set", function() {
    airport.setCapacity(20);
    expect(airport._CAPACITY).toEqual(20);
  })

  it("cannot hold more planes than capacity", function() {
    var i = 0;
    while (i <= airport._CAPACITY) {
      airport.receivePlane(plane)
    };
    expect(function() {airport.receivePlane(plane);}).toThrow(new Error ("Capacity reached!"));
  })

});
