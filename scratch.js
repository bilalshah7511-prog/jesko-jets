import fs from 'fs';

fetch('https://jeskojets.com/')
  .then(res => res.text())
  .then(html => {
    fs.writeFileSync('scraped.html', html);
    console.log('Saved scraped.html');
  });
