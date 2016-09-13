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

});
