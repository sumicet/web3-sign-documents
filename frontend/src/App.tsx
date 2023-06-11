import { Layout } from '@/layout';
import { ScrollRestoration, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import '@fontsource-variable/montserrat';
import '@fontsource-variable/merriweather-sans';

function AnimatedOutlet({ outlet: outletProp }: { outlet?: React.ReactElement | null }) {
    const o = useOutlet();
    const [outlet] = useState(o);

    return <>{outlet || outletProp}</>;
}

const MotionFlex = motion(Flex);

// Passing the error as an outlet prop to force it to render inside the layout
// See Routes.tsx for more details
// TODO: I believe this also triggers the header to rerender, should investigate.
function App({ outlet }: { outlet?: React.ReactElement | null }) {
    return (
        <Layout>
            <ScrollRestoration />
            <AnimatePresence mode="popLayout">
                <MotionFlex
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.5,
                    }}
                    boxSize="100%"
                >
                    <AnimatedOutlet outlet={outlet} />
                </MotionFlex>
            </AnimatePresence>
        </Layout>
    );
}

export default App;
