
// https://medium.com/geekculture/creating-a-step-sequencer-with-tone-js-32ea3002aaf5
// https://www.andronio.me/2019/04/24/easily-play-a-song-track-in-javascript-using-tone-js-transport/

let transportResult: TransportResult;

const createTransport = async(): Promise<TransportResult> => {
  if (transportResult) {  
    return transportResult;
  }
  transportResult = transport(arrangement(simpleSong))
  await Tone.start()
  return transportResult;
}

// somewhere in a click handler
createTransport();

console.log('start');


Tone.Transport.stop();
Tone.Transport.position = 0;
Tone.Transport.cancel();

transportResult.transport.start()

transportResult.arrangement.tracks.forEach(track => {
track.part.stop()
track.part.start(0)
})
