import { javascriptExample, terminalExample } from "@/lib/codeExamples";

export function Preview() {
  return (
    <section id="preview" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Theme Preview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Code Editor Preview */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-sm text-gray-400">script.js</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap"><code>
                <div className="eldritch-text-blue">function <span className="eldritch-text-yellow">calculateFibonacci</span>(<span className="eldritch-text-red">n</span>) {"{"}</div>
                <div className="pl-4 eldritch-text-comment">// Return fibonacci number at position n</div>
                <div className="pl-4 eldritch-text-purple">if</div><span> (</span><span className="eldritch-text-red">n</span> <span className="eldritch-text-pink">{"<="}</span> <span className="eldritch-text-cyan">1</span>) {"{"}
                <div className="pl-8 eldritch-text-purple">return</div><span> </span><span className="eldritch-text-red">n</span><span>;</span>
                <div className="pl-4">{"}"}</div>
                <div>&nbsp;</div>
                <div className="pl-4 eldritch-text-purple">let</div><span> </span><span className="eldritch-text-red">a</span> <span className="eldritch-text-pink">{"="}</span> <span className="eldritch-text-cyan">0</span><span>, </span><span className="eldritch-text-red">b</span> <span className="eldritch-text-pink">{"="}</span> <span className="eldritch-text-cyan">1</span><span>;</span>
                <div>&nbsp;</div>
                <div className="pl-4 eldritch-text-purple">for</div><span> (</span><span className="eldritch-text-purple">let</span> <span className="eldritch-text-red">i</span> <span className="eldritch-text-pink">{"="}</span> <span className="eldritch-text-cyan">2</span><span>; </span><span className="eldritch-text-red">i</span> <span className="eldritch-text-pink">{"<="}</span> <span className="eldritch-text-red">n</span><span>; </span><span className="eldritch-text-red">i</span><span className="eldritch-text-pink">++</span><span>) {"{"}</span>
                <div className="pl-8 eldritch-text-purple">const</div><span> </span><span className="eldritch-text-red">next</span> <span className="eldritch-text-pink">{"="}</span> <span className="eldritch-text-red">a</span> <span className="eldritch-text-pink">+</span> <span className="eldritch-text-red">b</span><span>;</span>
                <div className="pl-8 eldritch-text-red">a</div><span> </span><span className="eldritch-text-pink">{"="}</span><span> </span><span className="eldritch-text-red">b</span><span>;</span>
                <div className="pl-8 eldritch-text-red">b</div><span> </span><span className="eldritch-text-pink">{"="}</span><span> </span><span className="eldritch-text-red">next</span><span>;</span>
                <div className="pl-4">{"}"}</div>
                <div>&nbsp;</div>
                <div className="pl-4 eldritch-text-purple">return</div><span> </span><span className="eldritch-text-red">b</span><span>;</span>
                <div>{"}"}</div>
                <div>&nbsp;</div>
                <div className="eldritch-text-comment">// Example class with inheritance</div>
                <div className="eldritch-text-purple">class</div><span> </span><span className="eldritch-text-blue">Entity</span><span> {"{"}</span>
                <div className="pl-4 eldritch-text-yellow">constructor</div><span>(name) {"{"}</span>
                <div className="pl-8 eldritch-text-purple">this</div><span className="eldritch-text-pink">.</span><span>name </span><span className="eldritch-text-pink">{"="}</span><span> name;</span>
                <div className="pl-4">{"}"}</div>
                <div>&nbsp;</div>
                <div className="pl-4 eldritch-text-yellow">describe</div><span>() {"{"}</span>
                <div className="pl-8 eldritch-text-purple">return</div><span> </span><span className="eldritch-text-green">`Entity: ${"{"}</span><span className="eldritch-text-purple">this</span><span className="eldritch-text-pink">.</span><span>name</span><span className="eldritch-text-green">{"}"}`</span><span>;</span>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </code></pre>
            </div>
          </div>
          
          {/* Terminal Preview */}
          <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 flex items-center">
              <span className="text-sm text-gray-400">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap"><code>
                <div><span className="eldritch-text-green">user@eldritch</span>:<span className="eldritch-text-blue">~/projects</span>$ ls -la</div>
                <div>total 32</div>
                <div>drwxr-xr-x  5 user user 4096 Oct 31 13:37 <span className="eldritch-text-blue">.</span></div>
                <div>drwxr-xr-x 18 user user 4096 Oct 31 12:13 <span className="eldritch-text-blue">..</span></div>
                <div>-rw-r--r--  1 user user  837 Oct 31 13:36 config.json</div>
                <div>drwxr-xr-x  8 user user 4096 Oct 31 13:37 <span className="eldritch-text-blue">eldritch-theme</span></div>
                <div>-rw-r--r--  1 user user 1823 Oct 31 13:24 README.md</div>
                <div>drwxr-xr-x  3 user user 4096 Oct 31 13:30 <span className="eldritch-text-blue">src</span></div>
                <div>&nbsp;</div>
                <div><span className="eldritch-text-green">user@eldritch</span>:<span className="eldritch-text-blue">~/projects</span>$ cd eldritch-theme</div>
                <div><span className="eldritch-text-green">user@eldritch</span>:<span className="eldritch-text-blue">~/projects/eldritch-theme</span>$ npm install</div>
                <div><span className="eldritch-text-purple">added</span> <span className="eldritch-text-yellow">128</span> <span className="eldritch-text-purple">packages, and</span> <span className="eldritch-text-yellow">37</span> <span className="eldritch-text-purple">packages are looking for funding</span></div>
                <div>run `npm fund` for details</div>
                <div>&nbsp;</div>
                <div><span className="eldritch-text-green">user@eldritch</span>:<span className="eldritch-text-blue">~/projects/eldritch-theme</span>$ npm run build</div>
                <div><span className="eldritch-text-yellow">{">"} eldritch-theme@1.0.0 build</span></div>
                <div><span className="eldritch-text-yellow">{">"} vsce package</span></div>
                <div>&nbsp;</div>
                <div><span className="eldritch-text-green">SUCCESS</span> ✓ Packaged: eldritch-theme-1.0.0.vsix</div>
                <div><span className="eldritch-text-blue">Size: 13.37 MB</span></div>
                <div><span className="eldritch-text-green">user@eldritch</span>:<span className="eldritch-text-blue">~/projects/eldritch-theme</span>$ _</div>
              </code></pre>
            </div>
          </div>
        </div>

        {/* UI Elements Preview */}
        <div className="mt-12 eldritch-bg-background rounded-lg shadow-xl overflow-hidden p-6">
          <h3 className="text-xl font-bold mb-6">UI Elements Preview</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="eldritch-text-accent mb-4 font-medium">Buttons & Controls</h4>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 eldritch-bg-purple eldritch-text-background rounded-md hover:bg-opacity-90">Primary</button>
                  <button className="px-4 py-2 bg-transparent border eldritch-border-purple eldritch-text-purple rounded-md hover:eldritch-bg-purple/10">Secondary</button>
                  <button className="px-4 py-2 eldritch-bg-red eldritch-text-background rounded-md hover:bg-opacity-90">Danger</button>
                  <button className="px-4 py-2 eldritch-bg-green eldritch-text-background rounded-md hover:bg-opacity-90">Success</button>
                </div>
                <div>
                  <label className="block text-sm mb-1">Input Field</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:eldritch-ring-purple" 
                    placeholder="Enter text..."
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Dropdown</label>
                  <select className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:eldritch-ring-purple">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div>
              <h4 className="eldritch-text-accent mb-4 font-medium">Notifications & Alerts</h4>
              <div className="space-y-4">
                <div className="p-4 eldritch-bg-purple/20 border-l-4 eldritch-border-purple rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info eldritch-text-purple w-5 h-5">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium eldritch-text-foreground">Information message</p>
                      <p className="text-sm eldritch-text-foreground/70 mt-1">Additional information about this alert.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 eldritch-bg-red/20 border-l-4 eldritch-border-red rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle eldritch-text-red w-5 h-5">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium eldritch-text-foreground">Error message</p>
                      <p className="text-sm eldritch-text-foreground/70 mt-1">Something went wrong. Please try again.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 eldritch-bg-green/20 border-l-4 eldritch-border-green rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle eldritch-text-green w-5 h-5">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium eldritch-text-foreground">Success message</p>
                      <p className="text-sm eldritch-text-foreground/70 mt-1">Operation completed successfully.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
