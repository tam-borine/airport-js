describe('FeatureTest', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('a plane can land in an airport', function() {
    plane.land();
    airport.receivePlane(plane);
    expect(airport._planes).toContain(plane);
    expect(plane.isLanded).toEqual(true);
  });

});
