'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="Lorem Ipsum" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Lorem</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, fuga quis! Quod earum asperiores, porro possimus, corporis eos facilis officiis ipsum enim sed voluptas labore voluptatibus velit illum, autem dolore.{' '}
        <span className="font-extrabold text-white">
          Lorem ipsum dolor sit.
        </span>{' '}
        Lorem ipsum dolor sit.{' '}
        <span className="font-extrabold text-white">Lorem</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus excepturi omnis exercitationem corporis non soluta mollitia?{' '}
        <span className="font-extrabold text-white">Lorem</span> Lorem, ipsum.
        Lorem ipsum dolor sit amet consectetur.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
