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
                <div><span className="eldritch-text-pink">&lt;!DOCTYPE html&gt;</span></div>
                <div><span className="eldritch-text-red">&lt;html</span> <span className="eldritch-text-yellow">lang=</span><span className="eldritch-text-green">"en"</span><span className="eldritch-text-red">&gt;</span></div>
                <div><span className="eldritch-text-red">&lt;head&gt;</span></div>
                <div>  <span className="eldritch-text-red">&lt;meta</span> <span className="eldritch-text-yellow">charset=</span><span className="eldritch-text-green">"UTF-8"</span><span className="eldritch-text-red">&gt;</span></div>
                <div>  <span className="eldritch-text-red">&lt;meta</span> <span className="eldritch-text-yellow">name=</span><span className="eldritch-text-green">"viewport"</span> <span className="eldritch-text-yellow">content=</span><span className="eldritch-text-green">"width=device-width, initial-scale=1.0"</span><span className="eldritch-text-red">&gt;</span></div>
                <div>  <span className="eldritch-text-red">&lt;title&gt;</span>Eldritch Theme Demo<span className="eldritch-text-red">&lt;/title&gt;</span></div>
                <div>  <span className="eldritch-text-red">&lt;link</span> <span className="eldritch-text-yellow">rel=</span><span className="eldritch-text-green">"stylesheet"</span> <span className="eldritch-text-yellow">href=</span><span className="eldritch-text-green">"styles.css"</span><span className="eldritch-text-red">&gt;</span></div>
                <div><span className="eldritch-text-red">&lt;/head&gt;</span></div>
                <div><span className="eldritch-text-red">&lt;body</span> <span className="eldritch-text-yellow">class=</span><span className="eldritch-text-green">"dark-theme"</span><span className="eldritch-text-red">&gt;</span></div>
                <div>  <span className="eldritch-text-red">&lt;header</span> <span className="eldritch-text-yellow">id=</span><span className="eldritch-text-green">"main-header"</span><span className="eldritch-text-red">&gt;</span></div>
                <div>    <span className="eldritch-text-red">&lt;h1&gt;</span>Welcome to Eldritch<span className="eldritch-text-red">&lt;/h1&gt;</span></div>
                <div>    <span className="eldritch-text-red">&lt;nav&gt;</span></div>
                <div>      <span className="eldritch-text-comment">&lt;!-- Navigation elements --&gt;</span></div>
                <div>    <span className="eldritch-text-red">&lt;/nav&gt;</span></div>
                <div>  <span className="eldritch-text-red">&lt;/header&gt;</span></div>
                <div>&nbsp;</div>
                <div>  <span className="eldritch-text-red">&lt;script</span> <span className="eldritch-text-yellow">src=</span><span className="eldritch-text-green">"app.js"</span><span className="eldritch-text-red">&gt;&lt;/script&gt;</span></div>
                <div><span className="eldritch-text-red">&lt;/body&gt;</span></div>
                <div><span className="eldritch-text-red">&lt;/html&gt;</span></div>
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
                <div><span className="eldritch-text-comment"># A simple Python class example</span></div>
                <div><span className="eldritch-text-purple">class</span> <span className="eldritch-text-blue">EldritchProcessor</span>:</div>
                <div>    <span className="eldritch-text-purple">def</span> <span className="eldritch-text-yellow">__init__</span>(<span className="eldritch-text-red">self</span>, <span className="eldritch-text-red">name</span>, <span className="eldritch-text-red">power_level</span><span className="eldritch-text-pink">=</span><span className="eldritch-text-cyan">10</span>):</div>
                <div>        <span className="eldritch-text-red">self</span>.<span className="eldritch-text-red">name</span> <span className="eldritch-text-pink">=</span> <span className="eldritch-text-red">name</span></div>
                <div>        <span className="eldritch-text-red">self</span>.<span className="eldritch-text-red">power_level</span> <span className="eldritch-text-pink">=</span> <span className="eldritch-text-red">power_level</span></div>
                <div>        <span className="eldritch-text-red">self</span>.<span className="eldritch-text-red">active</span> <span className="eldritch-text-pink">=</span> <span className="eldritch-text-purple">False</span></div>
                <div>&nbsp;</div>
                <div>    <span className="eldritch-text-purple">def</span> <span className="eldritch-text-yellow">activate</span>(<span className="eldritch-text-red">self</span>):</div>
                <div>        <span className="eldritch-text-comment"># Activate the processor</span></div>
                <div>        <span className="eldritch-text-purple">if</span> <span className="eldritch-text-red">self</span>.<span className="eldritch-text-red">power_level</span> <span className="eldritch-text-pink">{">"}</span> <span className="eldritch-text-cyan">0</span>:</div>
                <div>            <span className="eldritch-text-red">self</span>.<span className="eldritch-text-red">active</span> <span className="eldritch-text-pink">=</span> <span className="eldritch-text-purple">True</span></div>
                <div>            <span className="eldritch-text-yellow">print</span>(<span className="eldritch-text-green">f"Activating {"{"}</span><span className="eldritch-text-red">self</span>.<span className="eldritch-text-red">name</span><span className="eldritch-text-green">{"}"} with power level {"{"}</span><span className="eldritch-text-red">self</span>.<span className="eldritch-text-red">power_level</span><span className="eldritch-text-green">{"}"}"</span>)</div>
                <div>            <span className="eldritch-text-purple">return</span> <span className="eldritch-text-purple">True</span></div>
                <div>        <span className="eldritch-text-purple">else</span>:</div>
                <div>            <span className="eldritch-text-yellow">print</span>(<span className="eldritch-text-green">"Insufficient power level"</span>)</div>
                <div>            <span className="eldritch-text-purple">return</span> <span className="eldritch-text-purple">False</span></div>
                <div>&nbsp;</div>
                <div>    <span className="eldritch-text-purple">def</span> <span className="eldritch-text-yellow">process_data</span>(<span className="eldritch-text-red">self</span>, <span className="eldritch-text-red">data</span>):</div>
                <div>        <span className="eldritch-text-purple">if</span> <span className="eldritch-text-purple">not</span> <span className="eldritch-text-red">self</span>.<span className="eldritch-text-red">active</span>:</div>
                <div>            <span className="eldritch-text-purple">raise</span> <span className="eldritch-text-blue">ValueError</span>(<span className="eldritch-text-green">"Processor not active"</span>)</div>
                <div>&nbsp;</div>
                <div>        <span className="eldritch-text-purple">return</span> <span className="eldritch-text-pink">[</span><span className="eldritch-text-red">x</span> <span className="eldritch-text-pink">*</span> <span className="eldritch-text-red">self</span>.<span className="eldritch-text-red">power_level</span> <span className="eldritch-text-purple">for</span> <span className="eldritch-text-red">x</span> <span className="eldritch-text-purple">in</span> <span className="eldritch-text-red">data</span><span className="eldritch-text-pink">]</span></div>
                <div>&nbsp;</div>
                <div><span className="eldritch-text-comment"># Using the class</span></div>
                <div><span className="eldritch-text-red">processor</span> <span className="eldritch-text-pink">=</span> <span className="eldritch-text-blue">EldritchProcessor</span>(<span className="eldritch-text-green">"Nyarlathotep"</span>, <span className="eldritch-text-cyan">13</span>)</div>
                <div><span className="eldritch-text-red">processor</span>.<span className="eldritch-text-yellow">activate</span>()</div>
                <div><span className="eldritch-text-red">result</span> <span className="eldritch-text-pink">=</span> <span className="eldritch-text-red">processor</span>.<span className="eldritch-text-yellow">process_data</span>(<span className="eldritch-text-pink">[</span><span className="eldritch-text-cyan">1</span>, <span className="eldritch-text-cyan">2</span>, <span className="eldritch-text-cyan">3</span>, <span className="eldritch-text-cyan">4</span>, <span className="eldritch-text-cyan">5</span><span className="eldritch-text-pink">]</span>)</div>
                <div><span className="eldritch-text-yellow">print</span>(<span className="eldritch-text-red">result</span>)</div>
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
              <pre className="whitespace-pre-wrap">
                <code className="flex flex-col">
                  <div><span className="eldritch-text-comment">/* Eldritch Theme CSS Variables */</span></div>
                  <div><span className="eldritch-text-purple">:root</span> {"{"}</div>
                  <div>  <span className="eldritch-text-red">--background</span>: <span className="eldritch-text-green">#1a1a1a</span>;</div>
                  <div>  <span className="eldritch-text-red">--foreground</span>: <span className="eldritch-text-green">#eeeee6</span>;</div>
                  <div>  <span className="eldritch-text-red">--comment</span>: <span className="eldritch-text-green">#7c8377</span>;</div>
                  <div>  <span className="eldritch-text-red">--purple</span>: <span className="eldritch-text-green">#a277ff</span>;</div>
                  <div>  <span className="eldritch-text-red">--red</span>: <span className="eldritch-text-green">#ff6767</span>;</div>
                  <div>  <span className="eldritch-text-red">--yellow</span>: <span className="eldritch-text-green">#ffca85</span>;</div>
                  <div>  <span className="eldritch-text-red">--green</span>: <span className="eldritch-text-green">#61ffca</span>;</div>
                  <div>  <span className="eldritch-text-red">--cyan</span>: <span className="eldritch-text-green">#82e2ff</span>;</div>
                  <div>  <span className="eldritch-text-red">--blue</span>: <span className="eldritch-text-green">#6ab3ff</span>;</div>
                  <div>  <span className="eldritch-text-red">--pink</span>: <span className="eldritch-text-green">#ff7aac</span>;</div>
                  <div>{"}"}</div>
                  <div>&nbsp;</div>
                  <div><span className="eldritch-text-comment">/* Base styles */</span></div>
                  <div><span className="eldritch-text-purple">body</span> {"{"}</div>
                  <div>  <span className="eldritch-text-red">background-color</span>: <span className="eldritch-text-pink">var</span>(--background);</div>
                  <div>  <span className="eldritch-text-red">color</span>: <span className="eldritch-text-pink">var</span>(--foreground);</div>
                  <div>  <span className="eldritch-text-red">font-family</span>: <span className="eldritch-text-green">'Inter', sans-serif</span>;</div>
                  <div>  <span className="eldritch-text-red">line-height</span>: <span className="eldritch-text-cyan">1.6</span>;</div>
                  <div>{"}"}</div>
                  <div>&nbsp;</div>
                  <div><span className="eldritch-text-purple">h1, h2, h3, h4</span> {"{"}</div>
                  <div>  <span className="eldritch-text-red">color</span>: <span className="eldritch-text-pink">var</span>(--purple);</div>
                  <div>  <span className="eldritch-text-red">margin-bottom</span>: <span className="eldritch-text-cyan">1rem</span>;</div>
                  <div>{"}"}</div>
                  <div>&nbsp;</div>
                  <div><span className="eldritch-text-purple">.button</span> {"{"}</div>
                  <div>  <span className="eldritch-text-red">background-color</span>: <span className="eldritch-text-pink">var</span>(--purple);</div>
                  <div>  <span className="eldritch-text-red">color</span>: <span className="eldritch-text-pink">var</span>(--background);</div>
                  <div>  <span className="eldritch-text-red">padding</span>: <span className="eldritch-text-cyan">0.5rem</span> <span className="eldritch-text-cyan">1rem</span>;</div>
                  <div>  <span className="eldritch-text-red">border-radius</span>: <span className="eldritch-text-cyan">0.25rem</span>;</div>
                  <div>  <span className="eldritch-text-red">border</span>: <span className="eldritch-text-green">none</span>;</div>
                  <div>{"}"}</div>
                  <div>&nbsp;</div>
                  <div><span className="eldritch-text-purple">.button:hover</span> {"{"}</div>
                  <div>  <span className="eldritch-text-red">opacity</span>: <span className="eldritch-text-cyan">0.9</span>;</div>
                  <div>{"}"}</div>
                </code>
              </pre>
            </div>
          </div>
          
          {/* JSON Example */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <span className="text-sm text-gray-400">theme.json</span>
              <span className="text-xs eldritch-text-comment">JSON</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap">
                <code className="flex flex-col">
                  <div>{"{"}</div>
                  <div>  <span className="eldritch-text-green">"name"</span>: <span className="eldritch-text-green">"Eldritch"</span>,</div>
                  <div>  <span className="eldritch-text-green">"type"</span>: <span className="eldritch-text-green">"dark"</span>,</div>
                  <div>  <span className="eldritch-text-green">"colors"</span>: {"{"}</div>
                  <div>    <span className="eldritch-text-green">"editor.background"</span>: <span className="eldritch-text-green">"#1a1a1a"</span>,</div>
                  <div>    <span className="eldritch-text-green">"editor.foreground"</span>: <span className="eldritch-text-green">"#eeeee6"</span>,</div>
                  <div>    <span className="eldritch-text-green">"editorCursor.foreground"</span>: <span className="eldritch-text-green">"#a277ff"</span>,</div>
                  <div>    <span className="eldritch-text-green">"editor.selectionBackground"</span>: <span className="eldritch-text-green">"#444444"</span>,</div>
                  <div>    <span className="eldritch-text-green">"editor.lineHighlightBackground"</span>: <span className="eldritch-text-green">"#2a2a2a"</span>,</div>
                  <div>    <span className="eldritch-text-green">"editorLineNumber.foreground"</span>: <span className="eldritch-text-green">"#7c8377"</span>,</div>
                  <div>    <span className="eldritch-text-green">"editorLineNumber.activeForeground"</span>: <span className="eldritch-text-green">"#a277ff"</span></div>
                  <div>  {"}"},</div>
                  <div>  <span className="eldritch-text-green">"tokenColors"</span>: [</div>
                  <div>    {"{"}</div>
                  <div>      <span className="eldritch-text-green">"name"</span>: <span className="eldritch-text-green">"Comments"</span>,</div>
                  <div>      <span className="eldritch-text-green">"scope"</span>: [</div>
                  <div>        <span className="eldritch-text-green">"comment"</span>,</div>
                  <div>        <span className="eldritch-text-green">"punctuation.definition.comment"</span></div>
                  <div>      ],</div>
                  <div>      <span className="eldritch-text-green">"settings"</span>: {"{"}</div>
                  <div>        <span className="eldritch-text-green">"foreground"</span>: <span className="eldritch-text-green">"#7c8377"</span></div>
                  <div>      {"}"}</div>
                  <div>    {"}"},</div>
                  <div>    {"{"}</div>
                  <div>      <span className="eldritch-text-green">"name"</span>: <span className="eldritch-text-green">"Keywords"</span>,</div>
                  <div>      <span className="eldritch-text-green">"scope"</span>: [</div>
                  <div>        <span className="eldritch-text-green">"keyword"</span>,</div>
                  <div>        <span className="eldritch-text-green">"storage.type"</span>,</div>
                  <div>        <span className="eldritch-text-green">"storage.modifier"</span></div>
                  <div>      ],</div>
                  <div>      <span className="eldritch-text-green">"settings"</span>: {"{"}</div>
                  <div>        <span className="eldritch-text-green">"foreground"</span>: <span className="eldritch-text-green">"#a277ff"</span></div>
                  <div>      {"}"}</div>
                  <div>    {"}"}</div>
                  <div>  ]</div>
                  <div>{"}"}</div>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
