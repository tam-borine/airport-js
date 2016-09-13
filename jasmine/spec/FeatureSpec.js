describe('FeatureTest', function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport(weather);
    weather = {stormy: function(){}};
    spyOn(weather, 'stormy').and.returnValue(false);
  });

  it('a plane can land in an airport', function() {
    plane.land();
    airport.receivePlane(plane);
    expect(airport._planes).toContain(plane);
    expect(plane.isLanded).toEqual(true);
  });

  it('a plane can take off from an airport', function() {
    plane.land();
    airport.receivePlane(plane);
    plane.takeOff();
    airport.ejectPlane(plane);
    expect(airport._planes).not.toContain(plane);
    expect(plane.isLanded).toEqual(false);
  });



});
