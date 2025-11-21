import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThemeConfig } from "@/pages/Index";
import { Copy, Check, FileJson } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface JsonOutputProps {
  theme: ThemeConfig | null;
}

export const JsonOutput = ({ theme }: JsonOutputProps) => {
  const [copied, setCopied] = useState(false);

  if (!theme) {
    return (
      <Card className="p-12 bg-card border-border shadow-lg">
        <div className="text-center text-muted-foreground">
          <FileJson className="w-12 h-12 mx-auto mb-4 opacity-40" />
          <p className="text-sm">JSON output will appear here</p>
        </div>
      </Card>
    );
  }

  const jsonString = JSON.stringify(theme, null, 2);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      toast.success("JSON copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <Card className="bg-card border-border shadow-lg overflow-hidden">
      <div className="p-4 bg-muted/30 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileJson className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold text-foreground">JSON Output</h3>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={handleCopy}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="p-4 max-h-[500px] overflow-auto bg-slate-950">
        <pre className="text-xs text-slate-100 font-mono leading-relaxed">
          <code>{jsonString}</code>
        </pre>
      </div>
    </Card>
  );
};
