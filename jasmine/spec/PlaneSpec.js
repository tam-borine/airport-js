describe("Plane", function() {
  var plane;

  beforeEach(function(){
    plane = new Plane();

  });

  it('plane can land', function() {
    expect(plane.land).not.toBeUndefined();
  });

  it('landed status is given', function() {
    expect(plane.isLanded).toEqual(false);
  });

  it('landed status is true after landing', function() {
    plane.land();
    expect(plane.isLanded).toEqual(true);
  });

});
