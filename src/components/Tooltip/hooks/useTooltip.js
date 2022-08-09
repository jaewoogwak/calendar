import { useEffect, useState } from "react";

export default function useTooltip() {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    function handleClick() {
      setFixed(false);
    }
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [fixed]);
  return {
    isOpened: fixed,
    handleEnter() {
      setFixed(true);
    },
    handleLeave() {
      setFixed(false);
    },
    handleClick(event) {
      event?.stopPropagation();
      setFixed(true);
    },
    handleEscape(e) {
      if (e.keyCode === 27) {
        setFixed(false);
      }
    },
  };
}
