// Tone.Synth is a basic synthesizer with a single oscillator
const synth = new Tone.Synth();
// Set the tone to sine
synth.oscillator.type = "sawtooth";
// connect it to the master output (your speakers)
synth.toMaster();

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
  // fires off a note continously until trigger is released
  synth.triggerAttack(e.target.dataset.note);
});

piano.addEventListener("mouseup", e => {
  // stops the trigger
  synth.triggerRelease();
});

// handles keyboard events
document.addEventListener("keydown", e => {
  // e object has the key property to tell which key was pressed
  switch (e.key) {
    case "q":
      return synth.triggerAttack("C4");
    case "2":
      return synth.triggerAttack("C#4");
    case "w":
      return synth.triggerAttack("D4");
    case "3":
      return synth.triggerAttack("D#4");
    case "e":
      return synth.triggerAttack("E4");
    case "r":
      return synth.triggerAttack("F4");
    case "5":
      return synth.triggerAttack("F#4");
    case "t":
      return synth.triggerAttack("G4");
    case "6":
      return synth.triggerAttack("G#4");
    case "y":
      return synth.triggerAttack("A4");
    case "7":
      return synth.triggerAttack("A#4");
    case "u":
      return synth.triggerAttack("B4");
    default:
      return;
  }
});
// when the key is released, audio is released as well
document.addEventListener("keyup", e => {
  switch (e.key) {
    case "q":
    case "2":
    case "w":
    case "3":
    case "e":
    case "r":
    case "5":
    case "t":
    case "6":
    case "y":
    case "7":
    case "u":
       synth.triggerRelease();
  }
});
