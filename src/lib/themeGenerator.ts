import { ThemeConfig } from "@/pages/Index";

// Theme generation logic based on mood keywords
export const generateThemeFromMood = (mood: string): ThemeConfig => {
  const lowerMood = mood.toLowerCase();

  // Analyze keywords in the mood description
  const keywords = {
    calm: /calm|peace|serene|tranquil|relax|zen|quiet|gentle/i.test(lowerMood),
    energetic: /energy|vibrant|bold|dynamic|active|power|strong|intense/i.test(lowerMood),
    dark: /dark|night|mystery|gothic|shadow|noir|moody/i.test(lowerMood),
    warm: /warm|cozy|comfort|soft|inviting|friendly|autumn|sunset/i.test(lowerMood),
    professional: /professional|corporate|business|formal|clean|minimal|sleek/i.test(lowerMood),
    playful: /playful|fun|happy|joy|cheerful|bright|colorful|creative/i.test(lowerMood),
    nature: /nature|earth|organic|green|natural|eco|forest|garden/i.test(lowerMood),
    luxury: /luxury|premium|elegant|sophisticated|rich|royal|exclusive/i.test(lowerMood),
    tech: /tech|digital|modern|futuristic|cyber|neon|electronic/i.test(lowerMood),
  };

  // Generate theme based on detected mood
  if (keywords.calm) {
    return {
      colors: {
        background: "#f0f4f8",
        surface: "#ffffff",
        primary: "#5b9aa0",
        secondary: "#d6e4e5",
        text: "#2c3e50",
        accent: "#88b5bb",
      },
      radius: "lg",
      shadow: "soft",
      fontFamily: "Inter, system-ui, sans-serif",
      animation: {
        type: "fade",
        duration: "0.5s",
        easing: "ease-out",
      },
      explanation: "A calming theme with soft blues and gentle transitions, perfect for peaceful and focused experiences.",
    };
  }

  if (keywords.energetic) {
    return {
      colors: {
        background: "#fff5f5",
        surface: "#ffffff",
        primary: "#ff6b6b",
        secondary: "#ffd93d",
        text: "#2d3436",
        accent: "#ff8c42",
      },
      radius: "md",
      shadow: "lg",
      fontFamily: "Inter, system-ui, sans-serif",
      animation: {
        type: "bounce",
        duration: "0.3s",
        easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      explanation: "An energetic theme with vibrant reds and yellows, dynamic animations create an exciting and bold experience.",
    };
  }

  if (keywords.dark) {
    return {
      colors: {
        background: "#1a1a2e",
        surface: "#16213e",
        primary: "#9b59b6",
        secondary: "#2c3e50",
        text: "#ecf0f1",
        accent: "#e74c3c",
      },
      radius: "sm",
      shadow: "deep",
      fontFamily: "Inter, system-ui, sans-serif",
      animation: {
        type: "fade",
        duration: "0.6s",
        easing: "ease-in-out",
      },
      explanation: "A mysterious dark theme with purple accents and deep shadows for dramatic, immersive experiences.",
    };
  }

  if (keywords.warm) {
    return {
      colors: {
        background: "#fef6e4",
        surface: "#fffaec",
        primary: "#f77f00",
        secondary: "#fcbf49",
        text: "#3d2c00",
        accent: "#d62828",
      },
      radius: "xl",
      shadow: "soft",
      fontFamily: "Inter, system-ui, sans-serif",
      animation: {
        type: "slide",
        duration: "0.4s",
        easing: "ease-out",
      },
      explanation: "A warm and cozy theme with sunset oranges and yellows, creating an inviting and comfortable atmosphere.",
    };
  }

  if (keywords.professional) {
    return {
      colors: {
        background: "#f8f9fa",
        surface: "#ffffff",
        primary: "#2c3e50",
        secondary: "#ecf0f1",
        text: "#34495e",
        accent: "#3498db",
      },
      radius: "sm",
      shadow: "md",
      fontFamily: "Inter, system-ui, sans-serif",
      animation: {
        type: "fade",
        duration: "0.25s",
        easing: "ease",
      },
      explanation: "A clean, professional theme with neutral tones and subtle animations for business and corporate environments.",
    };
  }

  if (keywords.playful) {
    return {
      colors: {
        background: "#fff0f6",
        surface: "#ffffff",
        primary: "#ff6b9d",
        secondary: "#c44569",
        text: "#2d3436",
        accent: "#feca57",
      },
      radius: "full",
      shadow: "lg",
      fontFamily: "Inter, system-ui, sans-serif",
      animation: {
        type: "bounce",
        duration: "0.4s",
        easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      explanation: "A playful theme with bright pinks and rounded corners, fun animations create a joyful and creative experience.",
    };
  }

  if (keywords.nature) {
    return {
      colors: {
        background: "#f1f8f4",
        surface: "#ffffff",
        primary: "#27ae60",
        secondary: "#a8dadc",
        text: "#1d3557",
        accent: "#52b788",
      },
      radius: "lg",
      shadow: "soft",
      fontFamily: "Inter, system-ui, sans-serif",
      animation: {
        type: "fade",
        duration: "0.5s",
        easing: "ease-out",
      },
      explanation: "An organic theme inspired by nature with greens and earth tones, creating a fresh and natural feel.",
    };
  }

  if (keywords.luxury) {
    return {
      colors: {
        background: "#1c1c1e",
        surface: "#2c2c2e",
        primary: "#d4af37",
        secondary: "#48484a",
        text: "#f5f5f7",
        accent: "#c9a961",
      },
      radius: "md",
      shadow: "xl",
      fontFamily: "Inter, system-ui, sans-serif",
      animation: {
        type: "scale",
        duration: "0.5s",
        easing: "ease-out",
      },
      explanation: "A luxurious theme with gold accents on dark backgrounds, elegant shadows create premium sophistication.",
    };
  }

  if (keywords.tech) {
    return {
      colors: {
        background: "#0a0e27",
        surface: "#151934",
        primary: "#00d4ff",
        secondary: "#1e3a5f",
        text: "#e0e7ff",
        accent: "#b620e0",
      },
      radius: "sm",
      shadow: "lg",
      fontFamily: "Inter, system-ui, sans-serif",
      animation: {
        type: "slide",
        duration: "0.3s",
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      explanation: "A futuristic tech theme with cyan and purple accents, sharp animations create a modern digital experience.",
    };
  }

  // Default balanced theme
  return {
    colors: {
      background: "#f5f5f5",
      surface: "#ffffff",
      primary: "#667eea",
      secondary: "#e2e8f0",
      text: "#1a202c",
      accent: "#764ba2",
    },
    radius: "md",
    shadow: "md",
    fontFamily: "Inter, system-ui, sans-serif",
    animation: {
      type: "fade",
      duration: "0.3s",
      easing: "ease",
    },
    explanation: "A balanced, versatile theme with purple gradients and smooth transitions, suitable for various contexts.",
  };
};
