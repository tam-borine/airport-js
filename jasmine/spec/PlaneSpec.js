describe("Plane", function() {
  var plane;

  beforeEach(function(){
    plane = new Plane();
  })


  it('returns true if called on plane', function() {
    expect(plane.isLanded).toEqual(true);
  });

});
