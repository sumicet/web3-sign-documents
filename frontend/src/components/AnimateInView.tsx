import { HTMLChakraProps, chakra } from '@chakra-ui/react';
import { Variants, motion } from 'framer-motion';
import { ReactElement } from 'react';

const MotionSpan = motion(chakra.span);

const variants: Variants = {
    offscreen: {
        y: 100,
        opacity: 0,
    },
    onscreen: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0,
            duration: 0.6,
            delay: i * 0.05,
        },
    }),
};

/**
 * A wrapper component that animates its children in when they come into view.
 *
 * TODO: Could/should expand this component to be more flexible and customizable
 * to support other types of "whileInView" animations.
 */
export function AnimateInView(props: HTMLChakraProps<'span'> & { children: ReactElement }) {
    return (
        <MotionSpan
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            {...props}
        />
    );
}

export function AnimateInViewItem({
    /**
     * The number which will be multiplied by the delay to create a staggered effect.
     */
    custom = 0,
    ...rest
}: HTMLChakraProps<'span'> & { custom?: number }) {
    return <MotionSpan variants={variants} custom={custom} {...rest} />;
}
