// all inputs
let iterate = document.querySelectorAll("input")

// all sounds
let sounds = ["snar.mp3", "tap.mp3"];
let chose = 0;

// clicking sound
function play_sound(c) {
  var myAudio = new Audio(c);
  myAudio.play();
}

// changing sound
function cycle() {
  chose++;
  if (chose > sounds.length - 1) {
    chose = 0;
  }
}

// for all inputs, attach an 'on change' event handler to them that plays a clicking sound
for (var i of iterate) {
  i.addEventListener('change', function() {play_sound(sounds[chose])});
}

document.querySelector("button").addEventListener('click', function(){
  cycle();
  play_sound(sounds[chose]);
})
