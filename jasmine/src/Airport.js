function Airport(weather) {
  this._planes = [];
  this._CAPACITY = 10;
  this.weather = weather || new Weather();

}

Airport.prototype = {

  receivePlane: function(plane) {
    if (this._planes.length > this._CAPACITY) { throw "Capacity reached!";}
    if (this.weather.stormy()) { throw "No landing it's stormy!";}
    this._planes.push(plane);
  },

  ejectPlane: function(plane) {
    if (this.weather.stormy()) { throw "No flying it's stormy!";}
    var index = this._planes.indexOf(plane);
    this._planes.splice(index, 1);
  },

  setCapacity: function(number) {
    this._CAPACITY = number;
  }

};
