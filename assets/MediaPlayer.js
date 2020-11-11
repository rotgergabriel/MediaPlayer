function MediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  });
};

MediaPlayer.prototype.play = function() {
  this.media.play();
};

MediaPlayer.prototype.pause = function() {
  this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
  if (this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
};

MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function() {
  this.media.muted = false;
};

export default MediaPlayer;

// function person(name, lastName) {
//   this.name=name;
//   this.lastName=lastName;
// }

// person.prototype.saludar = function() {
//   console.log(`Hola me llamo ${this.name} ${this.lastName}`)
// }

// const gabriel = new person('Gabriel', 'Rotger');

// gabriel.saludar()

const hello = function(lugar) {
  console.log(`Hola me llamo ${this.name} ${this.lastName} y soy de ${lugar}`)
}

let person = {
  name:'gabriel',
  lastName: 'rotger'
}

hello.bind(person)

