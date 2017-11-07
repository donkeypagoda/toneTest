let baseFreq = 250;

// freq ratios for scales, might replace this with arrpeggios
const majPent = [1, 9/8, 5/4, 3/2, 5/3]
const minPent = [1, 6/5, 4/3, 3/2, 16/9]
const ionian = [1, 9/8, 5/4, 4/3, 3/2, 5/3, 15/8]
const aeolian = [1, 9/8, 9/8, 4/3, 3/2, 8/5, 16/9]
const allTwelve = [1, 16/15, 9/8, 6/5, 5/4, 4/3, 45/32, 3/2, 8/5, 5/3, 16/9, 15/8]

let scaleChoice = minPent;

// attack and relase arrays
const attackArr = [0.2, 0.1, 0.08, 0.06 ,0.05, 0.04, 0.03];
const relArr = [6, 4, 3.5, 2.8, 2.2, 2, 1.9];

//shape choices
const stepChoice = [
  [1],
  [3, 5],
  [3, 5],
  [3, 5, 7],
  [3, 5, 3, 5],
  [3, 5, 7, 1, 5],
  [1, 3, 5, 7, 3, 5],
  [1, 3, 5, 7, 3, 5, 7]
]

// sound structure
const limiter = new Tone.Limiter(-10);
Tone.Master.chain(limiter);

// oscillator and envelope arrays
let oscArr1 = [];
let oscArr2 = [];
let envArr1 = [];
let envArr2 = [];

let numbSides = 5;

// const makeArrs = function (numbSides) {
//   for (let i = 0; i < numbSides; i++){
//     let osc = new Tone.Oscillator(scaleChoice[i] * baseFreq);
//     console.log(osc.output);
//     oscArr1.push(osc);
//     let env = new Tone.AmplitudeEnvelope(0.09, 0.04, 0.09, 0.00001);
//     envArr1.push(env);
//     // wire up the jamz
//     oscArr1[i].connect(envArr1[i]).start();
//     envArr1[i].toMaster();
//   }
// }
// makeArrs(numbSides);

let synth = new Tone.Synth
synth.oscillator.type = "sine"
synth.envelope.attack = 0.09;
synth.envelope.decay = 0.1;
synth.envelope.sustain = 0.1;
synth.envelope.release = 3;
synth.toMaster();


let synth2 = new Tone.Synth
synth2.oscillator.type = "sine"
synth2.envelope.attack = 0.1;
synth2.envelope.decay = 7;
synth2.envelope.sustain = 7;
synth2.envelope.release = 13;
synth2.toMaster();

let synth3 = new Tone.Synth
synth3.oscillator.type = "sine"
synth3.envelope.attack = 1;
synth3.envelope.decay = 1;
synth3.envelope.sustain = 1;
synth3.envelope.release = 4;
synth3.toMaster();

let synth4 = new Tone.Synth
synth4.oscillator.type = "sine"
synth4.envelope.attack = 0.09;
synth4.envelope.decay = 0.1;
synth4.envelope.sustain = 0.4;
synth4.envelope.release = 20;
synth4.toMaster();

let synth5 = new Tone.Synth
synth5.oscillator.type = "sine"
synth5.envelope.attack = 0.09;
synth5.envelope.decay = 0.1;
synth5.envelope.sustain = 0.1;
synth5.envelope.release = 10;
synth5.toMaster();

let synth6 = new Tone.Synth
synth6.oscillator.type = "sine"
synth6.envelope.attack = 0.09;
synth6.envelope.decay = 0.1;
synth6.envelope.sustain = 0.1;
synth6.envelope.release = 10;
synth6.toMaster();

let synth7 = new Tone.Synth
synth7.oscillator.type = "sine"
synth7.envelope.attack = 0.09;
synth7.envelope.decay = 0.1;
synth7.envelope.sustain = 0.1;
synth7.envelope.release = 22;
synth7.toMaster();

let synth8 = new Tone.Synth
synth8.oscillator.type = "sine"
synth8.envelope.attack = 0.09;
synth8.envelope.decay = 0.1;
synth8.envelope.sustain = 0.1;
synth8.envelope.release = 35;
synth8.toMaster();

//lfo shimmy
let lfo1 = new Tone.LFO(5, -4, 4)

lfo1.fan(synth.oscillator.detune,
        synth2.oscillator.detune,
        synth3.oscillator.detune,
        synth4.oscillator.detune,
        synth5.oscillator.detune,
        synth6.oscillator.detune,
        synth7.oscillator.detune,
        synth8.oscillator.detune)

lfo1.start()

function ringMyBell(){
synth.triggerAttackRelease(225, 0.04) // root
synth2.triggerAttackRelease((225 * (16/9)), 0.02) // m7 up
synth3.triggerAttackRelease((225 * (9/8)), 0.1) // m3 up
synth4.triggerAttackRelease((225 / 2), 0.04)  // oct down
synth5.triggerAttackRelease(225 * (3/2), 0.03) // fifth up
synth6.triggerAttackRelease(225 * 2, 0.01) // oct up
synth7.triggerAttackRelease(225 * (18/8), 0.004) // 9th
synth8.triggerAttackRelease(450 * (9/8), 0.004) // m3 above high octave

  // for (let i = 0; i < oscArr1.length; i++){
  //   envArr1[i].triggerAttack("+0", 0.08);
  // }
}
let intervalID = setInterval(ringMyBell, 3000)
