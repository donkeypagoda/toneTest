let drone = new Tone.FMSynth();
drone.oscillator.type = "sine"
drone.modulation.type = "square"
drone.volume.value = -36;
drone.toMaster();

let droneModLFO = new Tone.LFO();
droneModLFO.connect(drone.modulationIndex)
droneModLFO.min = 0.1;
droneModLFO.max = 110;
droneModLFO.frequency.value = 0.12;
droneModLFO.set()

droneModLFO.start();
drone.triggerAttack(30)

let vol = document.getElementById('volume')
vol.oninput = () => {
  drone.volume.value = parseFloat(vol.value)
  console.log(drone.volume.value);
}
