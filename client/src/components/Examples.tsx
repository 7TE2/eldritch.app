import { htmlExample, pythonExample, cssExample, jsonExample } from "@/lib/codeExamples";

export function Examples() {
  return (
    <section id="examples" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Syntax Highlighting Examples</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* HTML Example */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <span className="text-sm text-gray-400">index.html</span>
              <span className="text-xs eldritch-text-comment">HTML</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap"><code>
                {htmlExample
                  .replace(/<!DOCTYPE html>/g, '<span class="eldritch-text-pink">&lt;!DOCTYPE html&gt;</span>')
                  .replace(/<html|<head|<meta|<title|<link|<body|<header|<h1|<nav|<script/g, '<span class="eldritch-text-red">$&</span>')
                  .replace(/<\/html|<\/head|<\/title|<\/body|<\/header|<\/h1|<\/nav|<\/script/g, '<span class="eldritch-text-red">$&</span>')
                  .replace(/lang=|charset=|name=|content=|rel=|href=|class=|id=/g, '<span class="eldritch-text-yellow">$&</span>')
                  .replace(/"en"|"UTF-8"|"viewport"|"width=device-width, initial-scale=1.0"|"stylesheet"|"styles.css"|"dark-theme"|"main-header"|"app.js"/g, '<span class="eldritch-text-green">$&</span>')
                  .replace(/>/g, '<span class="eldritch-text-red">&gt;</span>')
                  .replace(/<!-- Navigation elements -->/g, '<span class="eldritch-text-comment">&lt;!-- Navigation elements --&gt;</span>')}
              </code></pre>
            </div>
          </div>
          
          {/* Python Example */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <span className="text-sm text-gray-400">main.py</span>
              <span className="text-xs eldritch-text-comment">Python</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap"><code>
                {pythonExample
                  .replace(/# A simple Python class example|# Activate the processor|# Using the class/g, '<span class="eldritch-text-comment">$&</span>')
                  .replace(/class|def|if|else|raise|return|for|in|not/g, '<span class="eldritch-text-purple">$&</span>')
                  .replace(/EldritchProcessor|ValueError/g, '<span class="eldritch-text-blue">$&</span>')
                  .replace(/__init__|activate|process_data|print/g, '<span class="eldritch-text-yellow">$&</span>')
                  .replace(/self|name|power_level|active|data|processor|result|x/g, '<span class="eldritch-text-red">$&</span>')
                  .replace(/10|0|13|1|2|3|4|5/g, '<span class="eldritch-text-cyan">$&</span>')
                  .replace(/True|False/g, '<span class="eldritch-text-purple">$&</span>')
                  .replace(/\*|>|=|\[|\]/g, '<span class="eldritch-text-pink">$&</span>')
                  .replace(/"Nyarlathotep"|"Insufficient power level"|"Processor not active"/g, '<span class="eldritch-text-green">$&</span>')
                  .replace(/f"Activating {|} with power level {|}"/g, '<span class="eldritch-text-green">$&</span>')}
              </code></pre>
            </div>
          </div>
          
          {/* CSS Example */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <span className="text-sm text-gray-400">styles.css</span>
              <span className="text-xs eldritch-text-comment">CSS</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap"><code>
                {cssExample
                  .replace(/\/\* Eldritch Theme CSS Variables \*\/|\/\* Base styles \*\//g, '<span class="eldritch-text-comment">$&</span>')
                  .replace(/:root|body|h1, h2, h3, h4|.button|.button:hover/g, '<span class="eldritch-text-purple">$&</span>')
                  .replace(/--background|--foreground|--comment|--purple|--red|--yellow|--green|--cyan|--blue|--pink|background-color|color|font-family|line-height|margin-bottom|padding|border-radius|border|opacity/g, '<span class="eldritch-text-red">$&</span>')
                  .replace(/#1a1a1a|#eeeee6|#7c8377|#a277ff|#ff6767|#ffca85|#61ffca|#82e2ff|#6ab3ff|#ff7aac|'Inter', sans-serif|none/g, '<span class="eldritch-text-green">$&</span>')
                  .replace(/1.6|1rem|0.5rem|0.25rem|0.9/g, '<span class="eldritch-text-cyan">$&</span>')
                  .replace(/var/g, '<span class="eldritch-text-pink">var</span>')}
              </code></pre>
            </div>
          </div>
          
          {/* JSON Example */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <span className="text-sm text-gray-400">theme.json</span>
              <span className="text-xs eldritch-text-comment">JSON</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap"><code>
                {jsonExample
                  .replace(/"name"|"type"|"colors"|"editor.background"|"editor.foreground"|"editorCursor.foreground"|"editor.selectionBackground"|"editor.lineHighlightBackground"|"editorLineNumber.foreground"|"editorLineNumber.activeForeground"|"tokenColors"|"scope"|"settings"|"foreground"/g, '<span class="eldritch-text-green">$&</span>')
                  .replace(/"Eldritch"|"dark"|"#1a1a1a"|"#eeeee6"|"#a277ff"|"#444444"|"#2a2a2a"|"#7c8377"|"Comments"|"Keywords"|"comment"|"punctuation.definition.comment"|"keyword"|"storage.type"|"storage.modifier"/g, '<span class="eldritch-text-green">$&</span>')}
              </code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
