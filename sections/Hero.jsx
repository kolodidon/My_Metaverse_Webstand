'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { stamps } from '../constants'
import { Stamp } from '../components'

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={`${styles.heroHeading} ${styles.heroHeadingPrimary}`}>
          Skolkovo
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading} ${styles.heroHeadingSecondary}`}>AI Tech Week</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/cover5.jpg"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative object-center"
        />

        <div className="w-full flex flex-wrap justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 sm:gap-10 gap-5" >
          { stamps.map(({ href, src, alt }, idx) => <Stamp key={idx} idx={idx} href={href} src={src} alt={alt} />) }
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
