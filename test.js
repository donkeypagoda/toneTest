let droneSolid = new Tone.FMSynth();
let vol = document.getElementById('vol')
vol.oninput = () => {
  console.log(vol.value);
  droneSolid.volume.value = parseFloat(vol.value)
}
let modInd = document.getElementById('modInd')
modInd.onchange = () => {
  console.log(modInd.value);
  droneSolid.modulationIndex.value = parseFloat(modInd.value)
}


let ringMyBell = () => {
  droneSolid.triggerAttack(150)
}
