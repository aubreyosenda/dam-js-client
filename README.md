🟨 1. JavaScript SDK

📁 Path: sdks/javascript

▶️ Run / Test
cd sdks/javascript
npm install
npm run build     # Builds with Rollup
npm test          # Runs Jest tests
npm run lint      # Runs ESLint


If your package.json defines an examples/basic-usage.js, you can run it with:

node examples/basic-usage.js

🧩 Build Output

After npm run build, you’ll usually get compiled files in a dist/ folder — that’s what you’d publish to npm.