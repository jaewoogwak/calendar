import { useEffect, useState } from "react";

export default function useTooltip() {
  const [opened, setOpend] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    function handleClick() {
      console.log("handleClick in useEffect");
      setOpend(false);
      setFixed(false);
    }
    window.addEventListener("click", handleClick);
    return () => {
      console.log("클린업 함수");
      window.removeEventListener("click", handleClick);
    };
  }, [fixed]);
  return {
    isOpened: opened || fixed,
    handleEnter() {
      setOpend(true);
    },
    handleLeave() {
      setOpend(false);
    },
    handleClick(event) {
      //event.stopPropagation();
      setFixed(true);
    },
  };
}
