function Plane() {
  this.isLanded = false;
}

Plane.prototype = {

  land: function() {
    this.isLanded = true;
  }, //COMMAS

  takeOff: function() {
    this.isLanded = false;
  }

};
