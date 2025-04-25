import { useState } from "react";
import { colors, syntaxElements, uiElements } from "@/lib/colors";
import { toast } from "@/hooks/use-toast";
import { Check, Clipboard } from "lucide-react";

export function ColorPalette() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (hex: string, index: number) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedIndex(index);
      
      toast({
        title: "Copied to clipboard!",
        description: `Color code ${hex} has been copied.`,
      });
      
      // Reset the copy icon after 1.5 seconds
      setTimeout(() => {
        setCopiedIndex(null);
      }, 1500);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="palette" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Color Palette</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <div 
              key={color.name}
              className="bg-gray-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
              data-color={color.hex}
              data-name={color.displayName}
            >
              <div 
                className={`h-32 flex items-end p-4`}
                style={{ backgroundColor: color.hex }}
              >
                <span 
                  className="text-xs font-mono bg-black/30 px-2 py-1 rounded"
                  style={{ color: color.textColor || '#eeeee6' }}
                >
                  {color.displayName}
                </span>
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{color.displayName}</h3>
                  <span className="text-sm font-mono eldritch-text-foreground/70">{color.hex}</span>
                </div>
                <button 
                  className="copy-btn p-2 rounded hover:bg-gray-700 transition-colors"
                  onClick={() => copyToClipboard(color.hex, index)}
                  title="Copy hex code"
                >
                  {copiedIndex === index ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Clipboard className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-800/50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Color Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium eldritch-text-purple mb-2">Syntax Elements</h4>
              <ul className="space-y-2 text-sm">
                {syntaxElements.map((item, index) => (
                  <li key={index}>
                    <span 
                      className={`inline-block w-3 h-3 mr-2 rounded-sm`}
                      style={{ 
                        backgroundColor: colors.find(c => c.name === item.color)?.hex || '#fff' 
                      }}
                    ></span>
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium eldritch-text-green mb-2">UI Elements</h4>
              <ul className="space-y-2 text-sm">
                {uiElements.map((item, index) => (
                  <li key={index}>
                    <span 
                      className={`inline-block w-3 h-3 mr-2 rounded-sm`}
                      style={{ 
                        backgroundColor: colors.find(c => c.name === item.color)?.hex || '#fff' 
                      }}
                    ></span>
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
