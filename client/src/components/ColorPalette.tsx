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
      {/* Background blur elements for the palette section */}
      <div className="absolute -bottom-20 right-0 w-80 h-80 eldritch-bg-cyan/10 rounded-full filter blur-[120px] animate-pulse-slow"></div>
      <div className="absolute top-40 left-10 w-60 h-60 eldritch-bg-pink/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-shimmer">
          Color Palette
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <div 
              key={color.name}
              className="glass-effect-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              data-color={color.hex}
              data-name={color.displayName}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className={`h-32 flex items-end p-4 relative overflow-hidden group`}
                style={{ backgroundColor: color.hex }}
              >
                {/* Add shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-in-out"></div>
                
                <span 
                  className="text-xs font-mono bg-black/30 px-2 py-1 rounded backdrop-blur-sm"
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
                  className="copy-btn p-2 rounded-full hover:eldritch-bg-purple/20 transition-all duration-300 transform hover:scale-110"
                  onClick={() => copyToClipboard(color.hex, index)}
                  title="Copy hex code"
                >
                  {copiedIndex === index ? (
                    <Check className="h-5 w-5 text-green-400 animate-float-fast" />
                  ) : (
                    <Clipboard className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 glass-effect rounded-lg shadow-lg transform hover:translate-y-[-5px] transition-all duration-500">
          <h3 className="text-2xl font-bold mb-6 eldritch-text-cyan">Color Usage Guidelines</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect-light p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              <h4 className="font-medium eldritch-text-purple text-lg mb-4">Syntax Elements</h4>
              <ul className="space-y-3">
                {syntaxElements.map((item, index) => (
                  <li key={index} className="flex items-center group transition-all duration-300 hover:translate-x-1">
                    <span 
                      className={`inline-block w-4 h-4 mr-3 rounded-sm group-hover:animate-pulse-slow shadow-md`}
                      style={{ 
                        backgroundColor: colors.find(c => c.name === item.color)?.hex || '#fff' 
                      }}
                    ></span>
                    <span className="group-hover:eldritch-text-foreground">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-effect-light p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
              <h4 className="font-medium eldritch-text-green text-lg mb-4">UI Elements</h4>
              <ul className="space-y-3">
                {uiElements.map((item, index) => (
                  <li key={index} className="flex items-center group transition-all duration-300 hover:translate-x-1">
                    <span 
                      className={`inline-block w-4 h-4 mr-3 rounded-sm group-hover:animate-pulse-slow shadow-md`}
                      style={{ 
                        backgroundColor: colors.find(c => c.name === item.color)?.hex || '#fff' 
                      }}
                    ></span>
                    <span className="group-hover:eldritch-text-foreground">{item.description}</span>
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
