export interface EldritchColor {
  name: string;
  hex: string;
  displayName: string;
  textColor?: string;
}

export const colors: EldritchColor[] = [
  {
    name: "background",
    hex: "#1a1a1a",
    displayName: "Background",
    textColor: "#eeeee6"
  },
  {
    name: "foreground",
    hex: "#eeeee6",
    displayName: "Foreground",
    textColor: "#1a1a1a"
  },
  {
    name: "comment",
    hex: "#7c8377",
    displayName: "Comment",
    textColor: "#eeeee6"
  },
  {
    name: "purple",
    hex: "#a277ff",
    displayName: "Purple",
    textColor: "#1a1a1a"
  },
  {
    name: "red",
    hex: "#ff6767",
    displayName: "Red",
    textColor: "#1a1a1a"
  },
  {
    name: "yellow",
    hex: "#ffca85",
    displayName: "Yellow",
    textColor: "#1a1a1a"
  },
  {
    name: "green",
    hex: "#61ffca",
    displayName: "Green",
    textColor: "#1a1a1a"
  },
  {
    name: "cyan",
    hex: "#82e2ff",
    displayName: "Cyan",
    textColor: "#1a1a1a"
  },
  {
    name: "blue",
    hex: "#6ab3ff",
    displayName: "Blue",
    textColor: "#1a1a1a"
  },
  {
    name: "pink",
    hex: "#ff7aac",
    displayName: "Pink",
    textColor: "#1a1a1a"
  }
];

export const syntaxElements = [
  { color: "purple", description: "Keywords, storage types" },
  { color: "red", description: "Variables, tags, errors" },
  { color: "yellow", description: "Function calls, attributes" },
  { color: "green", description: "Strings, escaped characters" },
  { color: "cyan", description: "Constants, language support" },
  { color: "blue", description: "Classes, functions" },
  { color: "pink", description: "Operators, special keywords" },
];

export const uiElements = [
  { color: "background", description: "Main background" },
  { color: "foreground", description: "Primary text" },
  { color: "comment", description: "Secondary text, comments" },
  { color: "purple", description: "Primary accent, focus elements" },
  { color: "red", description: "Error states, warnings" },
  { color: "green", description: "Success states, active elements" },
];
