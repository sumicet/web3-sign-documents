import { useEffect, useState } from 'react';
import type { ImageProps as ChakraImageProps } from '@chakra-ui/react';
import { Image as ChakraImage } from '@chakra-ui/react';
import { motion } from 'framer-motion';

// The smallest image, 1 pixel.
const fallbackSrc = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

export type ImageProps = ChakraImageProps;

const MotionImage = motion(ChakraImage);

/**
 * Wraps Chakra's Image component.
 */
export function Image({ src, ...rest }: ImageProps) {
    const [renderedSrc, setRenderedSrc] = useState<ImageProps['src']>(undefined);
    const [isLoaded, setIsLoaded] = useState(false);
    const { onError, onLoad } = rest;

    useEffect(() => {
        const resolveSlashSrc =
            typeof src === 'string' &&
            !src.startsWith('http') &&
            !src.startsWith('/') &&
            !src.startsWith('data:') &&
            !src.startsWith('blob:')
                ? `/${src}`
                : src;

        setRenderedSrc(resolveSlashSrc);
    }, [src]);

    return (
        <MotionImage
            src={renderedSrc}
            placeholder={fallbackSrc}
            {...rest}
            onErrorCapture={(event) => {
                setRenderedSrc(fallbackSrc);

                onError?.(event);
            }}
            onLoad={(event) => {
                setIsLoaded(true);
                onLoad?.(event);
            }}
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: isLoaded ? 1 : 0,
            }}
            viewport={{ once: true, threshold: 0.8 }}
            transition={{
                duration: 0.28,
                ease: 'easeInOut',
            }}
        />
    );
}
