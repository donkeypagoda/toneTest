let droneSolid = new Tone.FMSynth();
droneSolid.oscillator.type = "sine"
droneSolid.modulation.type = "square"
droneSolid.volume.value = -6;
droneSolid.toMaster();
console.log(droneSolid.oscillator);
let droneModLFO = new Tone.LFO();
droneModLFO.connect(droneSolid.modulationIndex)
droneModLFO.min = 0.1;
droneModLFO.max = 100;
droneModLFO.frequency.value = 0.12;
droneModLFO.set()
droneModLFO.start();
let vol = document.getElementById('vol')
vol.oninput = () => {
  console.log(vol.value);
  droneSolid.volume.value = parseFloat(vol.value)
}
// let modInd = document.getElementById('modInd')
// modInd.oninput = () => {
//   console.log(modInd.value);
//   droneSolid.modulationIndex.value = parseFloat(modInd.value)
// }
let lfoFreq = document.getElementById("lfoFreq");
lfoFreq.oninput = () => {
  console.log(lfoFreq.value);
  droneModLFO.frequency.value = parseFloat(lfoFreq.value)
}



let ringMyBell = () => {
  droneSolid.triggerAttack(60)
}
let setIntervalID = setInterval(ringMyBell, 1000);
