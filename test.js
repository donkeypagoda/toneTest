let testTone = new Tone.Synth();
let pingy = new Tone.PingPongDelay(0.2, 0.5);
pingy.wet.value = 0.3;
testTone.connect(pingy);
// testTone.toMaster()
pingy.toMaster();


let ringMyBell = () =>{
  // cymbal.triggerAttack()
  // drum.triggerAttack(pitch)
  // monoSyn.triggerAttackRelease(monoPitch, 0.1)
  testTone.triggerAttackRelease(200, 0.1)
}
let setIntervalID = setInterval(ringMyBell, 1000)
// ringMyBell()
