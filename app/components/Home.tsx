import React from 'react';
import { useMachine } from '@xstate/react';
import toggleMachine from '../machines/toggle';
import styles from './Home.css';

export default function Home() {
  const [state, send] = useMachine(toggleMachine);

  return (
    <div className={styles.container} data-tid="container">
      <h2>Home</h2>
      <button type="button" onClick={() => send('TOGGLE')}>
        {state.value === 'inactive'
          ? 'Click to activate'
          : 'Active! Click to deactivate'}
      </button>
    </div>
  );
}
