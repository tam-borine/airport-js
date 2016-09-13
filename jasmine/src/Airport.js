function Airport() {
  this._planes = [];

}

Airport.prototype = {

  receivePlane: function(plane) {
    this._planes.push(plane);
  },
  
  ejectPlane: function(plane) {
    var index = this._planes.indexOf(plane);
    this._planes.splice(index, 1);
  }

};
