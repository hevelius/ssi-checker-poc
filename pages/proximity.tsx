import { NextPage } from 'next';
import styles from '../styles/Proximity.module.css';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Proximity: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      router.push('/success');
    }, 5000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [router]);

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
