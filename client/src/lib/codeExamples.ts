export const javascriptExample = `function calculateFibonacci(n) {
  // Return fibonacci number at position n
  if (n <= 1) {
    return n;
  }
  
  let a = 0, b = 1;
  
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  
  return b;
}

// Example class with inheritance
class Entity {
  constructor(name) {
    this.name = name;
  }
  
  describe() {
    return \`Entity: \${this.name}\`;
  }
}`;

export const htmlExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Eldritch Theme Demo</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="dark-theme">
  <header id="main-header">
    <h1>Welcome to Eldritch</h1>
    <nav>
      <!-- Navigation elements -->
    </nav>
  </header>

  <script src="app.js"></script>
</body>
</html>`;

export const pythonExample = `# A simple Python class example
class EldritchProcessor:
    def __init__(self, name, power_level=10):
        self.name = name
        self.power_level = power_level
        self.active = False
    
    def activate(self):
        # Activate the processor
        if self.power_level > 0:
            self.active = True
            print(f"Activating {self.name} with power level {self.power_level}")
            return True
        else:
            print("Insufficient power level")
            return False
    
    def process_data(self, data):
        if not self.active:
            raise ValueError("Processor not active")
        
        return [x * self.power_level for x in data]

# Using the class
processor = EldritchProcessor("Nyarlathotep", 13)
processor.activate()
result = processor.process_data([1, 2, 3, 4, 5])
print(result)`;

export const cssExample = `/* Eldritch Theme CSS Variables */
:root {
  --background: #1a1a1a;
  --foreground: #eeeee6;
  --comment: #7c8377;
  --purple: #a277ff;
  --red: #ff6767;
  --yellow: #ffca85;
  --green: #61ffca;
  --cyan: #82e2ff;
  --blue: #6ab3ff;
  --pink: #ff7aac;
}

/* Base styles */
body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
}

h1, h2, h3, h4 {
  color: var(--purple);
  margin-bottom: 1rem;
}

.button {
  background-color: var(--purple);
  color: var(--background);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
}

.button:hover {
  opacity: 0.9;
}`;

export const jsonExample = `{
  "name": "Eldritch",
  "type": "dark",
  "colors": {
    "editor.background": "#1a1a1a",
    "editor.foreground": "#eeeee6",
    "editorCursor.foreground": "#a277ff",
    "editor.selectionBackground": "#444444",
    "editor.lineHighlightBackground": "#2a2a2a",
    "editorLineNumber.foreground": "#7c8377",
    "editorLineNumber.activeForeground": "#a277ff"
  },
  "tokenColors": [
    {
      "name": "Comments",
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": {
        "foreground": "#7c8377"
      }
    },
    {
      "name": "Keywords",
      "scope": ["keyword", "storage.type", "storage.modifier"],
      "settings": {
        "foreground": "#a277ff"
      }
    }
  ]
}`;

export const terminalExample = `user@eldritch:~/projects$ ls -la
total 32
drwxr-xr-x  5 user user 4096 Oct 31 13:37 .
drwxr-xr-x 18 user user 4096 Oct 31 12:13 ..
-rw-r--r--  1 user user  837 Oct 31 13:36 config.json
drwxr-xr-x  8 user user 4096 Oct 31 13:37 eldritch-theme
-rw-r--r--  1 user user 1823 Oct 31 13:24 README.md
drwxr-xr-x  3 user user 4096 Oct 31 13:30 src

user@eldritch:~/projects$ cd eldritch-theme
user@eldritch:~/projects/eldritch-theme$ npm install
added 128 packages, and 37 packages are looking for funding
run \`npm fund\` for details

user@eldritch:~/projects/eldritch-theme$ npm run build
> eldritch-theme@1.0.0 build
> vsce package

SUCCESS ✓ Packaged: eldritch-theme-1.0.0.vsix
Size: 13.37 MB
user@eldritch:~/projects/eldritch-theme$ _`;
