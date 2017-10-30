let droneSolid = new Tone.FMSynth();
droneSolid.toMaster();
let droneModLFO = new Tone.LFO();
droneModLFO.connect(droneSolid.modulationIndex)
droneModLFO.min = 0.1;
droneModLFO.max = 200;
droneModLFO.frequency.value = 0.1;
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
  droneSolid.triggerAttack(150)
}
let setIntervalID = setInterval(ringMyBell, 1000);
