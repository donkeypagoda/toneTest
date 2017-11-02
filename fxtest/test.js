let testTone = new Tone.Synth();
let pingy = new Tone.PingPongDelay(0.2, 0.5);
let verb = new Tone.Freeverb(0.8, 3000);
let startPartying = () => {
  let setIntervalID = setInterval(ringMyBell, 2000)

}
let zorb = new Tone.Convolver("concert-crowd.ogg", startPartying)
pingy.wet.value = 0.6;
testTone.connect(zorb);
zorb.toMaster();
// pingy.connect(verb);
verb.toMaster();
// pingy.toMaster();

zorb.wet.value = 0.3;
let ringMyBell = () =>{
  // cymbal.triggerAttack()
  // drum.triggerAttack(pitch)
  // monoSyn.triggerAttackRelease(monoPitch, 0.1)
  testTone.triggerAttackRelease(200, 0.1)
}
// ringMyBell()
