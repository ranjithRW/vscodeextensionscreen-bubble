import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	console.log('obitobubble extension is now active!');

	const disposable = vscode.commands.registerCommand('obitobubble.showBubbles', () => {
		const panel = vscode.window.createWebviewPanel(
			'bubblePanel',
			'Bubble Pop Game',
			vscode.ViewColumn.One,
			{
				enableScripts: true,
				retainContextWhenHidden: true
			}
		);

		panel.webview.html = getWebviewContent();
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent(): string {
	return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bubble Pop Game</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            width: 100%;
            height: 100vh;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            overflow: hidden;
            font-family: Arial, sans-serif;
        }
        
        canvas {
            display: block;
            width: 100%;
            height: 100%;
        }
        
        .info {
            position: absolute;
            top: 20px;
            left: 20px;
            color: white;
            font-size: 18px;
            font-weight: bold;
            background: rgba(0, 0, 0, 0.5);
            padding: 10px 20px;
            border-radius: 10px;
            z-index: 10;
        }
    </style>
</head>
<body>
    <div class="info">Bubbles: <span id="count">20</span> | Click to pop!</div>
    <canvas id="bubbleCanvas"></canvas>

    <script>
        const canvas = document.getElementById('bubbleCanvas');
        const ctx = canvas.getContext('2d');
        const countDisplay = document.getElementById('count');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const TARGET_BUBBLE_COUNT = 20;
        const BUBBLE_RADIUS_MIN = 15;
        const BUBBLE_RADIUS_MAX = 40;
        const BUBBLE_SPEED_MIN = 0.5;
        const BUBBLE_SPEED_MAX = 3;

        const colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
            '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B88B', '#80D8FF'
        ];

        class Bubble {
            constructor() {
                this.radius = Math.random() * (BUBBLE_RADIUS_MAX - BUBBLE_RADIUS_MIN) + BUBBLE_RADIUS_MIN;
                this.x = Math.random() * (canvas.width - 2 * this.radius) + this.radius;
                this.y = Math.random() * (canvas.height - 2 * this.radius) + this.radius;
                this.vx = (Math.random() - 0.5) * BUBBLE_SPEED_MAX * 2;
                this.vy = (Math.random() - 0.5) * BUBBLE_SPEED_MAX * 2;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off walls
                if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
                    this.vx *= -1;
                    this.x = Math.max(this.radius, Math.min(canvas.width - this.radius, this.x));
                }
                if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
                    this.vy *= -1;
                    this.y = Math.max(this.radius, Math.min(canvas.height - this.radius, this.y));
                }
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();

                // Shine effect
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.beginPath();
                ctx.arc(this.x - this.radius / 3, this.y - this.radius / 3, this.radius / 3, 0, Math.PI * 2);
                ctx.fill();

                // Border
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.stroke();
            }

            isClicked(mouseX, mouseY) {
                const distance = Math.sqrt((mouseX - this.x) ** 2 + (mouseY - this.y) ** 2);
                return distance < this.radius;
            }
        }

        let bubbles = [];

        function initializeBubbles() {
            bubbles = [];
            for (let i = 0; i < TARGET_BUBBLE_COUNT; i++) {
                bubbles.push(new Bubble());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw bubbles
            for (let i = 0; i < bubbles.length; i++) {
                bubbles[i].update();
                bubbles[i].draw();
            }

            // Maintain bubble count
            while (bubbles.length < TARGET_BUBBLE_COUNT) {
                bubbles.push(new Bubble());
            }

            countDisplay.textContent = bubbles.length;

            requestAnimationFrame(animate);
        }

        canvas.addEventListener('click', (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            for (let i = 0; i < bubbles.length; i++) {
                if (bubbles[i].isClicked(mouseX, mouseY)) {
                    bubbles.splice(i, 1);
                    break;
                }
            }
        });

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        initializeBubbles();
        animate();
    </script>
</body>
</html>`;
}

export function deactivate() {}
