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
// var osc = new Tone.Oscillator(250);
// // console.log(osc.volume);
// osc.start();
// var env = new Tone.AmplitudeEnvelope(0.09, 0.04, 0.09, 0);
// env.connect(osc.evenvelope)
// env.toMaster();
// osc.connect(env);
// console.log(osc);
// env.toMaster();
// osc.start();
// env.connect(osc.output.volume.value)
// env.triggerAttack()
// let osc = new Tone.Oscillator(250)
// let env = new Tone.AmplitudeEnvelope(0.09, 0.04, 0.09, 0.00001);
//
// env.connect(osc.output.gain)
// osc.connect(env).start();;
// env.toMaster();
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
synth4.envelope.release = 15;
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
synth7.envelope.release = 16;
synth7.toMaster();

let synth8 = new Tone.Synth
synth8.oscillator.type = "sine"
synth8.envelope.attack = 0.09;
synth8.envelope.decay = 0.1;
synth8.envelope.sustain = 0.1;
synth8.envelope.release = 35;
synth8.toMaster();

let lfo1 = new Tone.LFO(3, -4, 4)
let lfo2 = new Tone.LFO(5, -5, 5)
let lfo3 = new Tone.LFO(5.5, -10, 10)
let lfo4 = new Tone.LFO(3, -4, 4)
let lfo5 = new Tone.LFO(3, -4, 4)
let lfo6 = new Tone.LFO(3, -4, 4)
let lfo7 = new Tone.LFO(3, -4, 4)
lfo1.connect(synth.oscillator.detune)
// lfo2.connect(synth2.oscillator.detune)
// lfo3.connect(synth3.oscillator.detune)
lfo4.connect(synth4.oscillator.detune)
lfo5.connect(synth5.oscillator.detune)
lfo6.connect(synth6.oscillator.detune)
// lfo7.connect(synth7.oscillator.detune)
lfo1.start()
lfo2.start()
lfo3.start()
lfo4.start()
lfo5.start()
lfo6.start()
// lfo7.start()


function ringMyBell(){
synth.triggerAttackRelease(225, 0.04) // root
//ditch the other waves
synth2.triggerAttackRelease((225 * (16/9)), 0.02) // m7 up
synth3.triggerAttackRelease((225 * (9/8)), 0.1) // m3 up
synth4.triggerAttackRelease(117, 0.04)  // oct down
synth5.triggerAttackRelease(337, 0.03) // fifth up
synth6.triggerAttackRelease(450, 0.01) // oct up
synth7.triggerAttackRelease(58, 0.012) // two octs down
synth8.triggerAttackRelease(506, 0.004) // m3 above high octave
// env.triggerAttack("+0", 0.09);
// osc.stop;
  // for (let i = 0; i < oscArr1.length; i++){
  //   envArr1[i].triggerAttack("+0", 0.08);
  // }
}
let intervalID = setInterval(ringMyBell, 3000)
