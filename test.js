let testTone = new Tone.Synth();
let pingy = new Tone.PingPongDelay(0.2, 0.5);
let verb = new Tone.Freeverb(0.8, 3000);
pingy.wet.value = 0.6;
testTone.connect(verb);
// pingy.connect(verb);
verb.toMaster();
// pingy.toMaster();


let ringMyBell = () =>{
  // cymbal.triggerAttack()
  // drum.triggerAttack(pitch)
  // monoSyn.triggerAttackRelease(monoPitch, 0.1)
  testTone.triggerAttackRelease(200, 0.1)
}
let setIntervalID = setInterval(ringMyBell, 2000)
// ringMyBell()
