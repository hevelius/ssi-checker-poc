import { NextPage } from 'next';
import styles from '../styles/Proximity.module.css';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { useEffect } from 'react';

const Proximity: NextPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/success';
    }, 5000);
  }, []);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
          }
        `}</style>
        <div className={styles.top}>
          <p className={styles.title}>
            Verifica della credenziale in corso....
          </p>
          <Spinner />
        </div>
      </div>
    </>
  );
};

export default Proximity;
