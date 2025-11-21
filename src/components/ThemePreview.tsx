import { Card } from "@/components/ui/card";
import { ThemeConfig } from "@/pages/Index";
import { Palette } from "lucide-react";

interface ThemePreviewProps {
  theme: ThemeConfig | null;
}

export const ThemePreview = ({ theme }: ThemePreviewProps) => {
  if (!theme) {
    return (
      <Card className="p-12 bg-card border-border shadow-lg">
        <div className="text-center text-muted-foreground">
          <Palette className="w-12 h-12 mx-auto mb-4 opacity-40" />
          <p className="text-sm">Theme preview will appear here</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-card border-border shadow-lg overflow-hidden">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground">Live Preview</h3>
          <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-md font-medium">
            {theme.animation.type}
          </span>
        </div>

        {/* Theme Preview Box */}
        <div
          className="relative rounded-xl p-8 overflow-hidden transition-all duration-500"
          style={{
            background: theme.colors.background,
            borderRadius: theme.radius === "none" ? "0" : 
                         theme.radius === "sm" ? "0.25rem" :
                         theme.radius === "md" ? "0.5rem" :
                         theme.radius === "lg" ? "0.75rem" :
                         theme.radius === "xl" ? "1rem" : "9999px",
            boxShadow: theme.shadow === "none" ? "none" :
                       theme.shadow === "sm" ? "0 1px 2px 0 rgb(0 0 0 / 0.05)" :
                       theme.shadow === "md" ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" :
                       theme.shadow === "lg" ? "0 10px 15px -3px rgb(0 0 0 / 0.1)" :
                       theme.shadow === "xl" ? "0 20px 25px -5px rgb(0 0 0 / 0.1)" :
                       theme.shadow === "soft" ? "0 8px 16px -4px rgb(0 0 0 / 0.08)" :
                       "0 25px 50px -12px rgb(0 0 0 / 0.25)",
          }}
        >
          <div 
            className="absolute inset-0 opacity-5"
            style={{ background: theme.colors.primary }}
          />
          
          <div className="relative space-y-6">
            {/* Surface Card */}
            <div
              className="p-6 rounded-lg"
              style={{
                background: theme.colors.surface,
                fontFamily: theme.fontFamily,
              }}
            >
              <h4 
                className="text-xl font-bold mb-2"
                style={{ color: theme.colors.text }}
              >
                Preview Title
              </h4>
              <p 
                className="text-sm mb-4 opacity-70"
                style={{ color: theme.colors.text }}
              >
                This is how your theme will look with the generated settings.
              </p>
              
              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  className="px-4 py-2 rounded-lg font-medium transition-transform hover:scale-105"
                  style={{
                    background: theme.colors.primary,
                    color: theme.colors.surface,
                    borderRadius: theme.radius === "none" ? "0" : 
                                 theme.radius === "sm" ? "0.25rem" :
                                 theme.radius === "md" ? "0.5rem" :
                                 theme.radius === "lg" ? "0.75rem" :
                                 theme.radius === "xl" ? "1rem" : "9999px",
                  }}
                >
                  Primary
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-medium transition-transform hover:scale-105"
                  style={{
                    background: theme.colors.secondary,
                    color: theme.colors.text,
                    borderRadius: theme.radius === "none" ? "0" : 
                                 theme.radius === "sm" ? "0.25rem" :
                                 theme.radius === "md" ? "0.5rem" :
                                 theme.radius === "lg" ? "0.75rem" :
                                 theme.radius === "xl" ? "1rem" : "9999px",
                  }}
                >
                  Secondary
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-medium transition-transform hover:scale-105"
                  style={{
                    background: theme.colors.accent,
                    color: theme.colors.surface,
                    borderRadius: theme.radius === "none" ? "0" : 
                                 theme.radius === "sm" ? "0.25rem" :
                                 theme.radius === "md" ? "0.5rem" :
                                 theme.radius === "lg" ? "0.75rem" :
                                 theme.radius === "xl" ? "1rem" : "9999px",
                  }}
                >
                  Accent
                </button>
              </div>
            </div>

            {/* Color Palette */}
            <div className="grid grid-cols-3 gap-3">
              {Object.entries(theme.colors).map(([name, color]) => (
                <div key={name} className="space-y-1">
                  <div
                    className="h-16 rounded-lg border border-white/10"
                    style={{ background: color }}
                  />
                  <p className="text-xs font-medium capitalize" style={{ color: theme.colors.text }}>
                    {name}
                  </p>
                  <p className="text-xs opacity-60 font-mono" style={{ color: theme.colors.text }}>
                    {color}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {theme.explanation}
          </p>
        </div>
      </div>
    </Card>
  );
};
