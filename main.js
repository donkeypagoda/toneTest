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

const makeArrs = function (numbSides) {
  for (let i = 0; i < numbSides; i++){
    let osc = new Tone.Oscillator(scaleChoice[i] * baseFreq);
    oscArr1.push(osc);
    let env = new Tone.Envelope(attackArr[numbSides], 0.01, 0.5, relArr[numbSides]);
    envArr1.push(env);
    // wire up the jamz
    env1Arr[i].connect(oscArr[i].output.gain)
    osc1Arr[i].connect(Tone.Master)
    osc1Arr[i].start();
  }
}
makeArrs(numbSides);
function ringMyBell(){
  for (let i = 0; i < osc1Arr.length; i++){
    env[i].triggerAttackRelease(env[i].attack,"+0",0.2);
  }
}
let intervalID = setInterval(ringMyBell, 3000)
