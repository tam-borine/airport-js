describe("Plane", function() {
  var plane;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['planes']);
    airport.planes.and.callFake(function() {
      return [];
    });
  })

  it('plane can land', function() {
    expect(plane.land).not.toBeUndefined();
  });

  it('landed status is given', function() {
    expect(plane.isLanded).toEqual(false);
  });

  it('landed status is true after landing', function() {
    plane.land(airport);
    expect(plane.isLanded).toEqual(true);
  });

});
