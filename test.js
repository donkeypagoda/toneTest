let cymbal = new Tone.MetalSynth().toMaster()
let harm = document.getElementById("harmonicity")
cymbal.frequency.value = 45;
cymbal.volume.value = -12;
harm.oninput = () => {
  cymbal.harmonicity = parseFloat(harm.value);
  console.log(cymbal.harmonicity);
}
let freq = document.getElementById("frequency")
freq.oninput = () => {
  cymbal.frequency.value = parseFloat(freq.value);
  console.log(cymbal.frequency.value);
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
let cymVol = document.getElementById("cymVol")
cymVol.oninput = () => {
  cymbal.volume.value = parseFloat(cymVol.value);
  console.log(cymbal.volume.value);
}

let drum = new Tone.MembraneSynth().toMaster();
let pitchVal = document.getElementById("pitch")
let pitch = 160;
drum.volume.value = 12;
drum.octaves = 0.8;
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
let drumVol = document.getElementById("drumVol")
  drumVol.oninput = () => {
  drum.volume.value = parseFloat(drumVol.value);
  console.log(drum.volume.value);
}

let pluck = new Tone.PluckSynth().toMaster();
let pluckPitchVal = document.getElementById("pluckPitchVal")
let pluckPitch = 160;

pluckPitchVal.oninput = () => {
  pluckPitch = parseFloat(pluckPitchVal.value);
  console.log(pluckPitch);
}
let aN = document.getElementById("aN")
aN.oninput = () => {
  pluck.attackNoise = parseFloat(aN.value);
  console.log(pluck.attackNoise);
};
let damp = document.getElementById("damp")
damp.oninput = () => {
  pluck.dampening.value = parseFloat(damp.value);
  console.log(pluck.dampening.value);
}
let res = document.getElementById("res")
  res.oninput = () => {
  pluck.resonance.value = parseFloat(res.value);
  console.log(pluck.resonance.value);
}
let pluckVol = document.getElementById("pluckVol")
pluckVol.oninput = () => {
  pluck.volume.value = parseFloat(pluckVol.value);
}

let ringMyBell = () =>{
  // cymbal.triggerAttack()
  // drum.triggerAttack(pitch)
  pluck.triggerAttackRelease(120, 0.01)
}
let setIntervalID = setInterval(ringMyBell, 5000)
