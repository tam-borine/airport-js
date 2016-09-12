describe('Airport', function() {
  var airport;
  var plane = jasmine.createSpyObj('plane',['landed']);

  beforeEach(function(){
    airport = new Airport();
  })

  it("returns plane once landed", function() {
    expect(airport.land(plane)).toEqual([plane]);
  });

});
