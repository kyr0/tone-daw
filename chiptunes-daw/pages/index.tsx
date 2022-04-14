import React, { useCallback } from 'react';

// @ts-ignore
import styles from '@styles/Home.module.css';

import {
  arrangement,
  send,
  transport,
  TransportResult,
  Tone,
} from '@tone-daw-core/dist/index';
import { simpleSong } from 'preset/arrangement/simpleSong';

// TODO:
console.log('styles', styles.main, send);

let transportResult: TransportResult;

const createTransport = async (): Promise<TransportResult> => {
  if (transportResult) {
    return transportResult;
  }
  transportResult = transport(arrangement(simpleSong));
  await Tone.start();
  return transportResult;
};

// https://medium.com/geekculture/creating-a-step-sequencer-with-tone-js-32ea3002aaf5
// https://www.andronio.me/2019/04/24/easily-play-a-song-track-in-javascript-using-tone-js-transport/
const Home = (): JSX.Element => {
  const onPlayClick = useCallback(() => {
    console.log('click');

    (async () => {
      createTransport();

      console.log('start');

      Tone.Transport.stop();
      Tone.Transport.position = 0;
      Tone.Transport.cancel();

      transportResult.transport.start();

      transportResult.arrangement.tracks.forEach((track) => {
        track.part.stop();
        track.part.start(0);
      });
    })();
  }, []);

  return (
    <main>
      <div className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      Home!
      <button
        type="button"
        className="nes-btn is-success"
        onClick={onPlayClick}
      >
        Play
      </button>
    </main>
  );
};

export default Home;
