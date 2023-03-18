let Drum = document.querySelectorAll(".drum");
console.log(Drum);

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  makesound(event.key);
});

function makesound(letter) {
  switch (letter) {
    case "w":
      let sound1 = new Audio();
      sound1.src = "SpaceLaserShot PE1095407.mp3";
      sound1.play();
      break;
    case "a":
      let sound2 = new Audio();
      sound2.src = "GunShotSnglShotEx PE1097508.mp3";
      sound2.play();
      break;
    case "s":
      let sound3 = new Audio();
      sound3.src = "GunShotSnglShotIn PE1097906.mp3";
      sound3.play();
      break;
    case "d":
      let sound4 = new Audio();
      sound4.src = "mixkit-bad-joke-drums-2893.wav";
      sound4.play();
      break;
    case "j":
      let sound5 = new Audio();
      sound5.src = "mixkit-cool-guitar-riff-2321.wav";
      sound5.play();
      break;
    case "k":
      let sound6 = new Audio();
      sound6.src = "mixkit-electric-guitar-distorted-slide-2340.wav";
      sound6.play();
      break;
    case "l":
      let sound7 = new Audio();
      sound7.src = "mixkit-guitar-stroke-up-2328.wav";
      sound7.play();
      break;
    default: return;
  }
 
}

for (let i = 0; i < Drum.length; i++) {
  Drum[i].addEventListener("click", () => {
    let innerHTML = Drum[i].innerText;
    makesound(innerHTML);
  });
}
