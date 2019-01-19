export interface ThemeProps {
  breakpoints: number[];
  space: string[];
  fontSizes: number[];
  shadows: string[];
}

export const theme: ThemeProps = {
  breakpoints: [576, 992, 1200],
  space: [
    "0",
    "4px",
    "8px",
    "12px",
    "16px",
    "24px",
    "32px",
    "48px",
    "64px",
    "96px",
    "128px",
    "192px",
    "256px",
    "384px",
    "512px",
    "640px",
    "768px"
  ],
  shadows: [
    "0 0",
    "0 1px 3px hsla(0, 0%, 0%, 0.4)",
    "0 4px 6px hsla(0, 0%, 0%, 0.3)",
    "0 5px 15px hsla(0, 0%, 0%, 0.2)",
    "0 10px 24px hsla(0, 0%, 0%, 0.2)",
    "0 15px 35px hsla(0, 0%, 0%, 0.2)"
  ],
  fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72]
};

export function spacing(val: number) {
  return (theme: ThemeProps) => theme.space[val];
}
