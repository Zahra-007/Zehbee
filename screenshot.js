const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.goto('http://localhost:3000/ai-prompt-generator', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: 'C:\\Users\\zahra\\.gemini\\antigravity\\brain\\026ecac6-215b-42f6-8188-5d6b259e9693\\artifacts\\mobile_screenshot.png', fullPage: true });
  await browser.close();
})();
