import { useState, useEffect, useRef } from 'react';

export default function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef(null);
    const refToggle = useRef(null);

    const toggle = () => {
        setIsComponentVisible(!isComponentVisible);
    }
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target) && !refToggle.current.contains(event.target) ) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return { ref, refToggle , isComponentVisible, setIsComponentVisible, toggle };
}