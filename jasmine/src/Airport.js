function Airport() {

  var hangar = [];

  Airport.prototype.planes = function(){
    return hangar;
  };

  Airport.prototype.land_plane= function(plane){
    hangar.push(plane);
  };

}
