import { useState } from "react";
import { dark, light } from "./mode";
export default function useMode() {
  const [isDark, setIsDark] = useState(true);

  const darkStyle = dark;
  const lightStyle = light;
  return isDark
    ? {
        isDark: isDark,
        onToggle() {
          setIsDark((prev) => !prev);
        },
        style: dark,
      }
    : {
        isDark: isDark,
        onToggle() {
          setIsDark((prev) => !prev);
        },
        style: light,
      };
}
