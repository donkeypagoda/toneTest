let cymbal = new Tone.MetalSynth().toMaster()
let harm = document.getElementById("harmonicity")
harm.oninput = () => {
  cymbal.harmonicity = parseFloat(harm.value);
  console.log(cymbal.harmonicity);
}
let freq = document.getElementById("frequency")
freq.oninput = () => {
  cymbal.frequency = parseFloat(freq.value);
  console.log(cymbal.frequency);
}
let octave = document.getElementById("octaves")
octave.oninput = () => {
  cymbal.octaves = parseFloat(octave.value);
  console.log(cymbal.octaves);
}
let resonance = document.getElementById("resonance")
resonance.oninput = () => {
  cymbal.resonance = parseFloat(resonance.value);
  console.log(cymbal.resonance);
}

let drum = new Tone.MembraneSynth().toMaster();
let pitchVal = document.getElementById("pitch")
let pitch = 60;
pitchVal.oninput = () => {
  pitch = parseFloat(pitchVal.value);
  console.log(pitch);
}
let oct = document.getElementById("oct")
oct.oninput = () => {
  drum.octaves = parseFloat(oct.value);
  console.log(drum.octaves);
}
let pDecay = document.getElementById("decay")
pDecay.oninput = () => {
  drum.pitchDecay = parseFloat(pDecay.value);
  console.log(drum.pitchDecay);
}


let ringMyBell = () =>{
  // cymbal.triggerAttack()
  drum.triggerAttack(pitch)
}
let setIntervalID = setInterval(ringMyBell, 1000)
