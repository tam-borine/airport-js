function Weather() {

}

Weather.prototype = {

    randomise: function() {
      return Math.random();
    },

    stormy: function() {
      if (this.randomise() > 0.5) {
        return true;
      }
    }

};
