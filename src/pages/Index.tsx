import { useState } from "react";
import { ThemeGenerator } from "@/components/ThemeGenerator";
import { ThemePreview } from "@/components/ThemePreview";
import { JsonOutput } from "@/components/JsonOutput";
import { Sparkles } from "lucide-react";

export interface ThemeConfig {
  colors: {
    background: string;
    surface: string;
    primary: string;
    secondary: string;
    text: string;
    accent: string;
  };
  radius: string;
  shadow: string;
  fontFamily: string;
  animation: {
    type: string;
    duration: string;
    easing: string;
  };
  explanation: string;
}

const Index = () => {
  const [generatedTheme, setGeneratedTheme] = useState<ThemeConfig | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Mood Theme Generator</h1>
              <p className="text-sm text-muted-foreground">Adaptive design systems powered by emotion</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <div className="space-y-6">
            <ThemeGenerator onThemeGenerated={setGeneratedTheme} />
          </div>

          {/* Right Column - Preview & Output */}
          <div className="space-y-6">
            <ThemePreview theme={generatedTheme} />
            <JsonOutput theme={generatedTheme} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>Generate adaptive themes based on mood, context, and emotion</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
