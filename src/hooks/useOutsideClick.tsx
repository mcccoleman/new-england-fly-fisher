import { useEffect } from "react";

export const useOutsideClick = (
  ref: React.MutableRefObject<null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      // @ts-ignore: Gatsby image seems inaccurately typed
      if (ref.current && !ref.current.contains(evt.target)) {
        callback(); //Do what you want to handle in the callback
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};
