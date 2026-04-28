'use client';

import React, { useEffect, useRef, useState } from 'react';

import { Container } from '../shared';
import styles from './cornerShape.module.css';

export default function CornerShape() {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  };

  const ref = useRef(null);
  const [state, setState] = useState('hidden');
  // hidden | active | morph

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('active');
        } else {
          setState('hidden');
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;

      // بعد scroll معين نحول الشكل
      if (scrollY > 500) {
        setState('morph');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`${styles.parent} my-3 py-24`}>
      <Container>
        <div className={`mb-8 ${styles.box} `}>
          <p className='mb-3 text-[20px] font-bold'>
            corner shape (Determines the shape of the angle) It must be border-radius
          </p>
          <button
            className={`${styles.btn1} ${styles.btn} me-6 rounded-md bg-red-500 px-8 py-4 text-white`}
          >
            round
          </button>
          <button
            className={`${styles.btn2} ${styles.btn} me-6 rounded-md bg-red-500 px-8 py-4 text-white`}
          >
            scoop
          </button>
          <button
            className={`${styles.btn3} ${styles.btn} me-6 rounded-md bg-red-500 px-8 py-4 text-white`}
          >
            bevel
          </button>
          <button
            className={`${styles.btn4} ${styles.btn} me-6 rounded-md bg-red-500 px-8 py-4 text-white`}
          >
            notch
          </button>
          <button
            className={`${styles.btn5} ${styles.btn} me-6 rounded-md bg-red-500 px-8 py-4 text-white`}
          >
            squircle
          </button>
          <button
            className={`${styles.btn6} ${styles.btn} me-6 rounded-md bg-red-500 px-8 py-4 text-white`}
          >
            superellipse
          </button>
          <button
            className={`${styles.btn7} ${styles.btn} me-6 rounded-md bg-red-500 px-8 py-4 text-white`}
          >
            round scoop
          </button>
          <button
            className={`${styles.btn8} ${styles.btn} me-6 rounded-md bg-red-500 px-8 py-4 text-white`}
          >
            notch
          </button>
          <button className={`${styles.btn9} me-6 rounded-md bg-red-500 px-8 py-4 text-white`}>
            notch
          </button>
          <button
            className={`${styles.btn10} ${styles.btn} me-6 rounded-md bg-red-500 px-8 py-4 text-white`}
          >
            sale
          </button>
          <p className='mt-4 text-[16px] font-bold'>
            superellipse(n)== important values between 0---1{' '}
          </p>
        </div>

        <div className={`${styles.box2} mb-6`}>sale</div>

        <nav className={styles.nav}>
          <ol>
            <li>
              <a>Step 1</a>
            </li>
            <li>
              <a>Step 2</a>
            </li>
            <li>
              <a>Step 3</a>
            </li>
          </ol>
        </nav>

        <div className={styles.wrapper}>
          <div className={`${styles.shape} ${animate ? styles.animate : ''}`}>
            <button className={styles.close} onClick={handleClick} />
          </div>

          <p className={animate ? styles.hideText : ''}>(Do not click the red button!)</p>
        </div>

        <section ref={ref} className={`${styles.section} ${styles[state]}`}>
          <h1>Corner Morph Section</h1>
          <p>Scroll to see shape transformation magic ✨</p>
        </section>

        <div className={`cornerShape h-[350px] max-w-[340px]`}>sdsfdafd</div>

        <div className='mt-3 h-[500px] w-full bg-red-300'>
          <div className='@container'></div>
        </div>
      </Container>
    </div>
  );
}
