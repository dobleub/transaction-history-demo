import { useEffect, useCallback, RefObject, MutableRefObject } from "react";

interface ICallback {
    (target: HTMLElement): any;
}

const useOutsideClick = (
    ref: RefObject<any> | MutableRefObject<any>,
    handlerOutside: ICallback,
    handlerInside: ICallback | null = null,
): [RefObject<any> | MutableRefObject<any>, ICallback] => {
    const handleClickOutside = useCallback(
        (event: any) => {
            const target = event.target as HTMLElement;

            if (ref.current && !ref.current.contains(target)) {
                if (handlerOutside) {
                    handlerOutside(target);
                }
            } else {
                if (handlerInside) {
                    handlerInside(target);
                }
            }
        },
        [ref, handlerOutside, handlerInside],
    );

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [handleClickOutside]);

    return [ref, handlerOutside];
};

export default useOutsideClick;
