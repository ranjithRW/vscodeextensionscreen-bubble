# How to Launch the Bubble Pop Game Extension

## Quick Start

### Option 1: Launch in Debug Mode (Recommended for Development)

1. **Open the folder in VS Code**
   ```
   code .
   ```
   (From the `vscodeextensionscreen` directory)

2. **Press `F5` or go to Run → Run Extension**
   - A new VS Code window will open with the extension loaded

3. **Open the Command Palette**
   - Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS)

4. **Search and run the command**
   - Type: `obito bubble game`
   - Press Enter

5. **Enjoy the bubbles!** 🫧
   - A new panel will open with colorful bubbles
   - Click on any bubble to pop it
   - New bubbles spawn automatically to keep the total at 20

### Option 2: Package and Install as Regular Extension

```bash
# Navigate to the extension folder
cd vscodeextensionscreen

# Install dependencies
npm install

# Compile
npm run compile

# Package the extension (requires vsce)
npm install -g @vscode/vsce
vsce package

# This creates a .vsix file
# You can then install it manually in VS Code:
# Extensions → ... → Install from VSIX
```

## Features You'll See

✨ **Visual Features:**
- 10 vibrant colors that change randomly
- Each bubble has a shine effect and border
- Smooth continuous animation
- Bubbles bounce off walls naturally
- Blue gradient background

🎮 **Gameplay:**
- 20 bubbles active at all times
- Click on any bubble to pop it
- A new bubble instantly spawns to replace it
- Bubble counter in the top-left corner

## Troubleshooting

### "Command not found" error
- Make sure the extension is activated
- Try running `npm run compile` again
- Restart VS Code

### No bubbles appear
- Check that JavaScript is enabled in the webview (it is by default)
- Try refreshing the panel
- Check the debug console for errors

### Bubbles appear frozen
- Your GPU might need updating
- Try closing and reopening the panel

## Keyboard Shortcuts

- **`F5`**: Launch the extension
- **`Ctrl+Shift+P` / `Cmd+Shift+P`**: Open Command Palette
- **`Ctrl+Shift+D`**: Open Debug view

## File Structure

```
vscodeextensionscreen/
├── src/
│   └── extension.ts          ← Main extension code
├── out/
│   └── extension.js          ← Compiled code
├── .vscode/
│   ├── launch.json          ← Debug configuration
│   └── tasks.json           ← Build tasks
├── package.json             ← Extension manifest
└── README.md                ← Full documentation
```

## Performance

- **60 FPS animation** on most systems
- **Very low CPU usage** despite smooth animations
- **Lightweight**: ~50KB extension size

## Building from Source

```bash
# Install dependencies
npm install

# Watch mode (auto-compile on changes)
npm run watch

# Or compile once
npm run compile

# Run tests
npm run test

# Lint code
npm run lint
```

Enjoy! 🎉
