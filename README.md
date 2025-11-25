# Bubble Pop Game - VS Code Extension

An interactive VS Code extension that fills your screen with colorful bubbles that roam around. Click on bubbles to pop them, and new ones will automatically spawn to maintain a total of 20 bubbles at all times!

## Features

- 🎨 **Colorful Bubbles**: 10 different vibrant colors with shine effects
- 🎯 **Interactive Gameplay**: Click any bubble to pop it instantly
- 🔄 **Auto-Regeneration**: New bubbles automatically spawn to keep the total at 20
- 🎪 **Smooth Animation**: Bubbles move around the screen with realistic bounce physics
- 📊 **Bubble Counter**: Track the number of bubbles in the top-left corner
- 📱 **Responsive Design**: Adapts to any screen size
- ✨ **Visual Polish**: Each bubble has a shine effect and border for depth

## Requirements

- VS Code 1.106.1 or later
- Node.js and npm (for development)

## How to Use

### Running the Extension

1. **Open the Extension**: Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)
2. **Search for Command**: Type "Show Bubble Pop Game"
3. **Execute**: Press Enter
4. **Enjoy**: Your screen will fill with colorful bubbles!

### Gameplay

- **Click on any bubble** to pop it
- **New bubbles spawn automatically** to maintain 20 total
- **Watch the counter** in the top-left to see the current bubble count
- **Bubbles bounce off walls** and move smoothly across the screen

## Installation (Development)

```bash
# Clone or navigate to the extension folder
cd vscodeextensionscreen

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run in development mode (press F5 in VS Code)
```

## Development

- **Source Code**: `src/extension.ts` - Extension main file
- **Test File**: `src/test/extension.test.ts` - Test suite
- **Configuration**: `package.json` - Extension manifest

## Technical Details

- **Built with**: TypeScript, VS Code Webview API, HTML5 Canvas
- **Animation**: `requestAnimationFrame` for smooth 60fps animation
- **Physics**: Simple velocity-based movement with wall collision
- **Colors**: 10 vibrant gradient colors

## File Structure

```
├── src/
│   ├── extension.ts       # Main extension file
│   └── test/
│       └── extension.test.ts
├── .vscode/
│   ├── launch.json       # Debug configuration
│   ├── tasks.json        # Build tasks
│   └── settings.json
├── package.json          # Extension manifest
├── tsconfig.json         # TypeScript config
└── README.md
```

## Known Issues

None at this time!

## Release Notes

### 1.0.0

- Initial release
- Colorful bubbles with animation
- Click to pop functionality
- Auto-regeneration to maintain 20 bubbles
- Responsive design

---

**Enjoy popping bubbles! 🫧**

