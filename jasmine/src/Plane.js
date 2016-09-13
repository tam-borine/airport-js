function Plane() {
  this.isLanded = false;
}

Plane.prototype = {

  land: function(airport) {
    airport.receivePlane(this);
  }

};
