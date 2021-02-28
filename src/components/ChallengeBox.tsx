import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge
  } = useContext(ChallengesContext)

  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  function handleChallengeCompleted() {
    completeChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContaienr}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeCompletedButton}
              onClick={handleChallengeCompleted}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Complete-os e avance de level.
          </p>
        </div>
      ) }
    </div>
  )
}
