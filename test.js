let gong = new Tone.MetalSynth().toMaster()
let harm = document.getElementById("harmonicity")
harm.oninput = () => {
  gong.harmonicity = parseFloat(harm.value);
  console.log(gong.harmonicity);
}
let freq = document.getElementById("frequency")
freq.oninput = () => {
  gong.frequency = parseFloat(freq.value);
  console.log(gong.frequency);
}
let octave = document.getElementById("octaves")
octave.oninput = () => {
  gong.octaves = parseFloat(octave.value);
  console.log(gong.octaves);
}
let resonance = document.getElementById("resonance")
resonance.oninput = () => {
  gong.resonance = parseFloat(resonance.value);
  console.log(gong.resonance);
}
let ringMyBell = () =>{
  gong.triggerAttack()
}
// let setIntervalID = setInterval(ringMyBell, 1000)
console.log(gong);
