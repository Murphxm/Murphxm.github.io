//MIDIFile test js script

var midiAccess;
// Requesting Midi Access
navigator.requestMIDIAccess().then( function onsuccesscallback( access ) {
  midiAccess = access;
},function onerrorcallback( err ) {
  console.log("uh-oh! Something went wrong!  Error code: " + err.code );
});

// File handlers
function readFile(input) {
  var reader = new FileReader();
  reader.readAsArrayBuffer(input.files[0]);
  reader.onloadend = function(event) {
    playFile(event.target.result);
  }
}


// file player
var midiFile, m;
function playFile(buffer) {
  var midiOutput;
  var midiOutputIDs = [];
  // testing output
  if(midiAccess) {
    midiAccess.outputs.forEach(function(port){
      console.log("Available output:", port.name);
      midiOutputIDs.push(port.id);
    });
    midiOutput = midiAccess.outputs.get(midiOutputIDs[0]);
    if (midiOutput) {
      console.log("Selected output:", midiOutput.name);
    } else {
      console.log("No MIDI output devices connected.");
    }
  } else {
    console.log('No access to MIDI output.');
  }

  // creating the MidiFile instance
  midiFile = new MIDIFile(buffer);
  var events = midiFile.getMidiEvents();
  var curTime = performance.now();
  var eventBytes  =  [];
  for(var i = 0, j = events.length; i < j; i++) {
    eventBytes = [(events[i].subtype << 4) + events[i].channel, events[i].param1];
    if (events[i].param2) {eventBytes.push(events[i].param2);}
    midiOutput && midiOutput.send(eventBytes, curTime + events[i].playTime);
  }

  //This is where the output exists
  console.log('Events read, playTime: ' + events[events.length - 1].playTime +
    ', tracks:' + midiFile.tracks.length + '.');

    //this line specifically is responsible for posting the output to the iframe

  document.getElementById('hexa').contentWindow.postMessage(midiFile.getContent(), '*');


}
