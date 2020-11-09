import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const playButton = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

// function saludar() {
//   console.log(`Hola me llamo ${this.name} ${this.surname}`)
// }

// let persona = {
//   name:'Gabriel',
//   surname:'Rotger'
// }

// saludar.call(persona)

// function correr(metros, direccion) {
//   console.log(`Corro ${metros} metros y en direccion ${direccion} todos los dias`)
// }
// const valores = [400, "sur"]

// correr.apply(persona, valores )


// let personaDos = {
//   name:'Sergio',
//   surname:'Rotger'
// }
// const personaDosSaluda = saludar.bind(personaDos)

// personaDosSaluda()

// const personaDosCorrer = correr.bind(personaDos, 100, 'cualquier direccion')
// personaDosCorrer()

// const zelda = {
//   name: 'Zelda',
// };

// const link = {
//   name: 'Link',
// };

// zelda.saludar = function() {
//   console.log(`Hola soy ${this.name}`)
// }
// link.saludar = function() {
//   console.log(`Hola soy ${this.name}`)
// }

// zelda.saludar();
// link.saludar()
// const heroMethods = {
//   saludar: function() {
//     console.log(`Hola soy ${this.name}`)
//   }
// }

function Hero(name) {
  // const hero = Object.create(Hero.prototype);
    this.name = name;
}

Hero.prototype.saludar = function() {
  console.log(`Hola soy ${this.name}`)
}

  const zelda = new Hero('Zelda')
  zelda.saludar()

  const link = new Hero('Link')
  link.saludar()