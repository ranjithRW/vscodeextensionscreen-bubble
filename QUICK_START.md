# 🚀 RUN YOUR BUBBLE POP GAME NOW!

## Step-by-Step Instructions

### Step 1: Open in VS Code
The project is already open in VS Code at:
`c:\Users\RanjithThangavel\Downloads\vscodeextensionscreen`

### Step 2: Press F5 to Launch
- This will:
  - Compile the extension automatically
  - Open a new VS Code window
  - Load the extension

### Step 3: Open Command Palette
- Press: **`Ctrl+Shift+P`** (Windows/Linux) or **`Cmd+Shift+P`** (Mac)

### Step 4: Run the Command
- Type: **`Show Bubble Pop Game`**
- Press Enter

### Step 5: ENJOY! 🫧
A new tab will open with:
- ✨ Colorful bubbles roaming around
- 📊 Bubble counter (top-left)
- 🎮 Click any bubble to pop it
- 🔄 New bubbles spawn automatically
- Always exactly **20 bubbles** on screen

---

## What You'll See

```
┌─────────────────────────────────────┐
│ Bubbles: 20 | Click to pop!         │  ← Counter shows bubble count
│                                     │
│     🔵    🔴         🟢            │
│        🟡      🔵                   │
│   🟣                    🔵   🟠    │  ← Beautiful colored bubbles
│                 🟢                   │
│     🔵                        🟢    │
│                                     │
│              🔴       🟡    🔵     │
│         🔵                          │
│              🔵      🟢        🟠   │
│                                     │
└─────────────────────────────────────┘
```

## Bubble Details

- **Colors**: 10 different vibrant colors
- **Sizes**: Random from 15-40 pixels
- **Speed**: Each bubble moves at its own speed
- **Direction**: Random directions with wall bouncing
- **Total**: Always 20 active bubbles
- **Effect**: Shine and border for depth
- **Background**: Beautiful blue gradient

## Features Working

✅ Bubbles spawn on startup
✅ Bubbles move smoothly across screen
✅ Click detection works perfectly
✅ Bubble popping animation
✅ Auto-regeneration to 20 bubbles
✅ Counter updates in real-time
✅ Wall collision and bouncing
✅ Responsive to window resize
✅ 60fps smooth animation
✅ Beautiful visual effects

---

## Troubleshooting

### Issue: "Command not found"
**Solution**: 
1. Make sure F5 is running (debug window should be open)
2. Try the command again

### Issue: No bubbles appear
**Solution**:
1. Check debug console for errors (View → Debug Console)
2. Try reloading the webview (refresh the panel)
3. Ensure JavaScript is enabled

### Issue: Extension won't compile
**Solution**:
1. Run: `npm install`
2. Run: `npm run compile`
3. Try F5 again

---

## File You Need to Know

- **`src/extension.ts`** - Main code (194 lines)
  - Contains all the magic ✨
  - Includes HTML, CSS, and JavaScript
  - Fully commented and easy to modify

---

## Want to Modify It?

You can easily change:

### Colors
Edit the `colors` array in src/extension.ts (line 88-92):
```javascript
const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', // Add more colors!
    // ...
];
```

### Bubble Count
Change `TARGET_BUBBLE_COUNT` from 20 to any number (line 83)

### Bubble Size
Adjust `BUBBLE_RADIUS_MIN` and `BUBBLE_RADIUS_MAX` (lines 84-85)

### Speed
Modify `BUBBLE_SPEED_MAX` (line 86)

---

## Ready? Let's Go! 🎉

1. **Press F5** right now!
2. **Wait 2-3 seconds** for compilation
3. **New window opens** with the extension
4. **Type the command**: "Show Bubble Pop Game"
5. **Click bubbles** and have fun! 🫧

Enjoy your bubble popping experience! 🎮✨
