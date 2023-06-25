import React from 'react'

import { motion } from 'framer-motion';

import { stampHoverVariant, fadeIn } from '../utils/motion';

const Stamp = ({ idx, href, src, alt }) => {
    return (
        <motion.a 
            href={href}
            whileHover={stampHoverVariant}
            variants={fadeIn('right', 'spring', idx * 0.75, 1)}
        >
            <img
                src={src}
                alt={alt}
                className="sm:w-[140px] w-[100px] sm:h-[100px] h-[70px] object-cover rounded-[20px] rounded-tr-[0px] blur-2"
            />
        </motion.a>
    )
}

export default Stamp