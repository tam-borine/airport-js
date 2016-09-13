function Airport() {
  this._planes = [];
  this._CAPACITY = 10;

}

Airport.prototype = {

  receivePlane: function(plane) {
    if (this._planes.length > this._CAPACITY) { throw "Capacity reached!";}
    this._planes.push(plane);
  },

  ejectPlane: function(plane) {
    var index = this._planes.indexOf(plane);
    this._planes.splice(index, 1);
  },

  setCapacity: function(number) {
    this._CAPACITY = number;
  }

};
