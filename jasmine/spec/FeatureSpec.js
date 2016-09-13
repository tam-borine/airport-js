describe('FeatureTest', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('a plane can land in an airport', function() {
    plane.land(airport);
    expect(airport._planes).toContain(plane);
  });

});
