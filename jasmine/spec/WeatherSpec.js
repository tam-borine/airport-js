describe("Weather", function() {
  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it("weather is stormy", function() {
    spyOn(Math, "random").and.returnValue(0.6);
    expect(weather.stormy()).toBe(true);
  });

});
