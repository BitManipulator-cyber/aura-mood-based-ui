import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Wand2, Lightbulb } from "lucide-react";
import { ThemeConfig } from "@/pages/Index";
import { generateThemeFromMood } from "@/lib/themeGenerator";
import { toast } from "sonner";

interface ThemeGeneratorProps {
  onThemeGenerated: (theme: ThemeConfig) => void;
}

const exampleMoods = [
  "Calm and focused morning",
  "Energetic and creative",
  "Dark and mysterious",
  "Warm and cozy evening",
  "Professional corporate",
  "Playful and fun",
];

export const ThemeGenerator = ({ onThemeGenerated }: ThemeGeneratorProps) => {
  const [mood, setMood] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!mood.trim()) {
      toast.error("Please enter a mood or context");
      return;
    }

    setIsGenerating(true);
    
    // Simulate generation delay for better UX
    setTimeout(() => {
      const theme = generateThemeFromMood(mood);
      onThemeGenerated(theme);
      setIsGenerating(false);
      toast.success("Theme generated successfully!");
    }, 600);
  };

  const handleExampleClick = (example: string) => {
    setMood(example);
  };

  return (
    <Card className="p-6 bg-card border-border shadow-lg">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Describe Your Mood</h2>
          <p className="text-sm text-muted-foreground">
            Enter a mood, context, or emotion to generate adaptive theme settings
          </p>
        </div>

        <div className="space-y-3">
          <label htmlFor="mood-input" className="text-sm font-medium text-foreground">
            Mood or Context
          </label>
          <Textarea
            id="mood-input"
            placeholder="e.g., 'Calm and peaceful morning', 'Energetic and bold', 'Dark and mysterious'..."
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="min-h-[120px] resize-none bg-background border-input"
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                handleGenerate();
              }
            }}
          />
          <p className="text-xs text-muted-foreground">
            Press {navigator.platform.includes("Mac") ? "⌘" : "Ctrl"} + Enter to generate
          </p>
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={isGenerating}
          className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          size="lg"
        >
          {isGenerating ? (
            <>
              <Wand2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Wand2 className="w-4 h-4 mr-2" />
              Generate Theme
            </>
          )}
        </Button>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Example Moods</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {exampleMoods.map((example) => (
              <button
                key={example}
                onClick={() => handleExampleClick(example)}
                className="px-3 py-1.5 text-xs bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-colors"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
