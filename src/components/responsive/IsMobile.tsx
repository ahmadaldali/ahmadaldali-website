'use client';

import { useEffect, useState } from 'react';

export const IsMobile = () => {
    const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
        width: 768,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize.width < 768;
};
