function Airport() {
  this._planes = [];

}

Airport.prototype = {

  receivePlane: function(plane) {
    this._planes.push(plane);
  }

};
