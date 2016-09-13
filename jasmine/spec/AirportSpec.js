describe('Airport', function() {

  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land']);
  })

  it("has no planes before plane has landed", function(){
    expect(airport.planes()).toEqual([]);
  });

  it("updates planes array when called", function(){
    airport.landPlane(plane)
    expect(airport.planes()).toEqual([plane]);
  });

});
