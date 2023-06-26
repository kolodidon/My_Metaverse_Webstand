import React from 'react'

import { motion } from 'framer-motion';

import { stampHoverVariant, fadeIn } from '../utils/motion';

const Stamp = ({ idx, href, bgColor, textColor, subTitle }) => {
    return (
        <motion.a
            href={href}
            whileHover={stampHoverVariant}
            variants={fadeIn('right', 'spring', idx * 0.75, 1)}
        >
            <div 
                style={{ backgroundColor: bgColor, color: textColor, }}
                className={`p-[15px] w-40 h-28 flex flex-col rounded-3xl rounded-tr-none`}
            >
                <span className="text-5xl font-bold tracking-tighter leading-[1.2]">
                    Sk
                </span>
                <span>
                    {subTitle}
                </span>
            </div>
        </motion.a>
    )
}

export default Stamp