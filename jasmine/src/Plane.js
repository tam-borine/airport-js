function Plane() {

}

Plane.prototype = {

  land: function(airport) {
    airport.receivePlane(this);
  }

};
