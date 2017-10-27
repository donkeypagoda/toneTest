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

let monoSyn = new Tone.MonoSynth().toMaster();
let monoPitch = 100;
monoSyn.oscillator.type = "sine"
let synPitch = document.getElementById("synPitch");
synPitch.oninput = () => {
  monoPitch = parseFloat(synPitch.value);
  console.log(monoPitch);
};
let attack = document.getElementById("attack");
attack.oninput = () => {
  monoSyn.envelope.attack = parseFloat(attack.value);
  console.log(monoSyn.envelope.attack);
};
let synDecay = document.getElementById("synDecay");
synDecay.oninput = () => {
  monoSyn.envelope.decay = parseFloat(synDecay.value);
  console.log(monoSyn.envelope.decay);
};
let sus = document.getElementById("sus");
sus.oninput = () => {
  monoSyn.envelope.sustain = parseFloat(sus.value);
  console.log(monoSyn.envelope.sustain);
};
let rel = document.getElementById("rel");
rel.oninput = () => {
  monoSyn.envelope.release = parseFloat(rel.value);
  console.log(monoSyn.envelope.release);
};
let synVol = document.getElementById("synVol");
synVol.oninput = () => {
  monoSyn.volume.value = parseFloat(synVol.value);
  console.log(monoSyn.volume.value);
}


let gong = new Tone.PolySynth(3, Tone.MonoSynth).toMaster();
let gongPitchSet = [380, 300, 280]
gong.set({
  "frequency": 200,
  "detune": 0,
  "oscillator": {"type": "square7"},
  "filter": {
    "Q": 3,
    "type": "lowpass",
    "rolloff": -24
  },
  "envelope": {
    "attack": 0.003,
    "decay": 2,
    "sustain": 2,
    "release": 5
  },
  "filterEnvelope": {
    "attack": 0.06,
    "decay": 2,
    "sustain": 3,
    "release": 5,
    "baseFrequency": 200,
    "octaves": 3,
    "exponent": 1
  }
})

console.log(gong);




let ringMyBell = () =>{
  // cymbal.triggerAttack()
  // drum.triggerAttack(pitch)
  // monoSyn.triggerAttackRelease(monoPitch, 0.1)
  gong.triggerAttackRelease(gongPitchSet, 0.1)
}
let setIntervalID = setInterval(ringMyBell, 3000)
