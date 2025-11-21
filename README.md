# 🌈 Aura – AI Adaptive Theme Engine

Aura is an AI-powered theme generator that dynamically creates beautiful UI themes based on mood, context, or design prompts.  
Describe any vibe like _"calming minimal dashboard"_ or _"neon futuristic UI"_ — Aura instantly generates:

- 🎨 Color palettes  
- 🟦 Border radiuses  
- 🌫 Shadows  
- 🅰️ Typography  
- ✨ Motion styles  
- ⚡ Smooth transitions for live preview  

This is a modern, aesthetic, real-world project built to showcase UI/UX, animations, and AI integration.

---

## 🚀 Features

### 🎭 Mood-Based Theme Generation  
Type any mood or style and Aura produces a fully structured theme configuration.

### 🧠 AI-Driven  
Uses LLMs (Groq / OpenAI / Gemini) to generate consistent JSON-based theme presets.

### ✨ Live UI Preview  
See themes update instantly with smooth **Framer Motion** animations.

### 🎨 Customizable  
Themes update:
- Background  
- Surface  
- Primary/secondary colors  
- Text/accent colors  
- Radius & shadow  
- Font family  
- Animation style  

### 🎛 Developer-Friendly  
Built with modern tools:
- React + TypeScript  
- TailwindCSS  
- Framer Motion  
- Vite  
- ShadCN UI components  

---

## 🧠 AI Prompt Used (Core)

```txt
You generate adaptive theme settings for a web application based on the user’s mood or context description.

Return ONLY a JSON object with the theme values.

JSON format:
{
  "colors": {
    "background": "",
    "surface": "",
    "primary": "",
    "secondary": "",
    "text": "",
    "accent": ""
  },
  "radius": "",
  "shadow": "",
  "fontFamily": "",
  "animation": {
    "type": "",
    "duration": "",
    "easing": ""
  },
  "explanation": "Short explanation about why these theme settings match the requested mood."
}
