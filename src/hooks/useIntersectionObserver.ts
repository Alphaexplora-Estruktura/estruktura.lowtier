import { useEffect, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number | number[];
    root?: Element | Document | null;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export function useIntersectionObserver(
    options: UseIntersectionObserverOptions = {}
): [React.RefObject<any>, boolean] {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;

    // We use standard React ref to attach to the element
    // Since we also need to return it, we manage the ref object internally
    // In a real application, you might use useRef from the consumer, but returning one is easier for simple use cases
    const [node, setNode] = useState<Element | null>(null);

    const ref = (element: Element | null) => {
        setNode(element);
    };

    useEffect(() => {
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
                if (entry.isIntersecting && triggerOnce) {
                    observer.unobserve(node);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(node);

        return () => {
            if (node) observer.unobserve(node);
        };
    }, [node, threshold, root, rootMargin, triggerOnce]);

    // We cast the ref function to React.RefObject type for ease of use in components
    return [ref as unknown as React.RefObject<any>, isIntersecting];
}
