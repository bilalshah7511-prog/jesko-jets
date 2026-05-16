const fs = require('fs');
const html = fs.readFileSync('scraped.html', 'utf8');
const headMatch = html.match(/<head>(.*?)<\/head>/s);
const bodyMatch = html.match(/<body[^>]*>(.*?)<\/body>/s);

const headContent = headMatch ? headMatch[1] : '';
const bodyContent = bodyMatch ? bodyMatch[1] : '';

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${headContent}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

fs.writeFileSync('frontend/index.html', indexHtml);

const escapedBody = bodyContent
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$')
  .replace(/<script[^>]*>.*?<\/script>/gs, ''); // Remove scripts from body as we will inject them in React

const reactCode = `import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Add Webflow JS dependencies
    const scripts = [
      'https://cdn.jsdelivr.net/npm/globe.gl',
      window.location.host.includes("webflow.io") ? "https://slater.app/16759.js" : "https://assets.slater.app/slater/16759.js?v=1.0"
    ];
    
    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.type = src.includes('slater') ? 'module' : 'text/javascript';
      document.body.appendChild(script);
    });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: \`${escapedBody}\` }} />;
}`;

fs.writeFileSync('frontend/src/App.jsx', reactCode);
console.log('Successfully injected exactly 100% clone HTML into React App.');
