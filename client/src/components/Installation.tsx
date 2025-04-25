export function Installation() {
  return (
    <section id="installation" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Installation Instructions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* VS Code Installation */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 eldritch-bg-blue/20 flex items-center justify-center rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2 w-7 h-7 eldritch-text-blue">
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-bold">VS Code</h3>
              </div>
              <ol className="space-y-3 text-sm">
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">1.</span>
                  <span>Open VS Code Extensions view (<code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Ctrl+Shift+X</code> / <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Cmd+Shift+X</code>)</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">2.</span>
                  <span>Search for "<code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Eldritch Theme</code>"</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">3.</span>
                  <span>Click Install</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">4.</span>
                  <span>Select the theme through <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Preferences → Color Theme</code></span>
                </li>
              </ol>
              <div className="mt-6">
                <p className="text-sm eldritch-text-foreground/70 mb-2">Manual installation via command:</p>
                <div className="bg-gray-800 p-3 rounded-md font-mono text-xs">
                  <code>ext install eldritch-theme</code>
                </div>
              </div>
            </div>
          </div>
          
          {/* JetBrains Installation */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 eldritch-bg-red/20 flex items-center justify-center rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code eldritch-text-red w-7 h-7">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-bold">JetBrains IDEs</h3>
              </div>
              <ol className="space-y-3 text-sm">
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">1.</span>
                  <span>Open Settings (<code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Ctrl+Alt+S</code> / <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Cmd+,</code>)</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">2.</span>
                  <span>Go to <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Plugins → Marketplace</code></span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">3.</span>
                  <span>Search for "Eldritch Theme"</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">4.</span>
                  <span>Install and restart IDE</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">5.</span>
                  <span>Select theme in <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Settings → Appearance & Behavior → Appearance</code></span>
                </li>
              </ol>
            </div>
          </div>
          
          {/* Vim Installation */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 eldritch-bg-green/20 flex items-center justify-center rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal eldritch-text-green w-7 h-7">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" x2="20" y1="19" y2="19"></line>
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-bold">Vim/Neovim</h3>
              </div>
              <p className="text-sm mb-4">For Vim with plugin manager (vim-plug):</p>
              <div className="bg-gray-800 p-3 rounded-md font-mono text-xs mb-4">
                <code>Plug 'eldritch-theme/vim'</code>
              </div>
              <p className="text-sm mb-2">Add to your .vimrc:</p>
              <div className="bg-gray-800 p-3 rounded-md font-mono text-xs">
                <code>colorscheme eldritch</code>
              </div>
              <p className="mt-4 text-sm">For Neovim with built-in LSP:</p>
              <div className="bg-gray-800 p-3 rounded-md font-mono text-xs mt-2">
                <code>use { 'eldritch-theme/nvim' }</code>
              </div>
            </div>
          </div>
          
          {/* Sublime Text Installation */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 eldritch-bg-yellow/20 flex items-center justify-center rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-braces eldritch-text-yellow w-7 h-7">
                    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1"></path>
                    <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2 2 2 0 0 0-2 2v5a2 2 0 0 1-2 2h-1"></path>
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-bold">Sublime Text</h3>
              </div>
              <ol className="space-y-3 text-sm">
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">1.</span>
                  <span>Install Package Control if not installed</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">2.</span>
                  <span>Open Command Palette (<code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Ctrl+Shift+P</code> / <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Cmd+Shift+P</code>)</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">3.</span>
                  <span>Select "Package Control: Install Package"</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">4.</span>
                  <span>Search for "Eldritch Color Scheme"</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">5.</span>
                  <span>Select theme via <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Preferences → Color Scheme</code></span>
                </li>
              </ol>
            </div>
          </div>
          
          {/* Terminal Installation */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 eldritch-bg-cyan/20 flex items-center justify-center rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal-square eldritch-text-cyan w-7 h-7">
                    <path d="M8 9h8"></path>
                    <path d="M8 13h6"></path>
                    <path d="M15 17h1"></path>
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-bold">Terminal</h3>
              </div>
              <p className="text-sm mb-3">For iTerm2:</p>
              <ol className="space-y-2 text-sm mb-4">
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">1.</span>
                  <span>Download the <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">Eldritch.itermcolors</code> file</span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">2.</span>
                  <span>Go to <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">iTerm2 → Preferences → Profiles → Colors</code></span>
                </li>
                <li className="flex">
                  <span className="eldritch-text-accent mr-2">3.</span>
                  <span>Import the downloaded file from the "Color Presets" dropdown</span>
                </li>
              </ol>
              <p className="text-sm mb-2">For Windows Terminal:</p>
              <p className="text-sm">Add the theme to your <code className="font-mono text-xs bg-gray-800 px-1 py-0.5 rounded">settings.json</code> file.</p>
            </div>
          </div>
          
          {/* Manual Installation */}
          <div className="eldritch-bg-background rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded eldritch-text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-7 h-7">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-bold">Manual Install</h3>
              </div>
              <p className="text-sm mb-4">Download theme files directly from the repository:</p>
              <a href="https://github.com/eldritch-theme" className="inline-flex items-center px-4 py-2 eldritch-bg-purple eldritch-text-background rounded-md hover:bg-opacity-90 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-4 h-4 mr-2">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                Visit GitHub Repository
              </a>
              <p className="mt-4 text-sm">Or clone the repository:</p>
              <div className="bg-gray-800 p-3 rounded-md font-mono text-xs mt-2">
                <code>git clone https://github.com/eldritch-theme.git</code>
              </div>
              <p className="mt-4 text-sm eldritch-text-comment">Each directory contains installation instructions for specific editors and environments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
