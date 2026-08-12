import AnimatedGradient from "./ui/animated-gradient";
import { useTheme } from "../hooks/useTheme";

// Anchored to the theme's own background tone so most of the canvas reads as
// the page background, with teal/gold blooms drifting through and reacting
// to the cursor — never a competing hue that would hurt text contrast.
const lightGradientConfig = {
  preset: "custom" as const,
  color1: "#f6f3ec",
  color2: "#93d9cb",
  color3: "#f0dca0",
  rotation: 15,
  proportion: 46,
  scale: 0.42,
  speed: 14,
  distortion: 5,
  swirl: 38,
  swirlIterations: 7,
  softness: 88,
  offset: 0,
  shape: "Edge" as const,
  shapeSize: 42,
};

const darkGradientConfig = {
  preset: "custom" as const,
  color1: "#0b0b09",
  color2: "#157a70",
  color3: "#4a3714",
  rotation: -15,
  proportion: 48,
  scale: 0.42,
  speed: 14,
  distortion: 6,
  swirl: 38,
  swirlIterations: 7,
  softness: 86,
  offset: 0,
  shape: "Edge" as const,
  shapeSize: 42,
};

export function SiteBackground() {
  const { theme } = useTheme();

  return (
    <AnimatedGradient
      config={theme === "dark" ? darkGradientConfig : lightGradientConfig}
      style={{ position: "fixed", inset: 0, zIndex: 0, opacity: theme === "dark" ? 0.55 : 1 }}
    />
  );
}
