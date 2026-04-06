const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const inputPath = path.resolve(__dirname, "../docs/_site/index.html");
  const outputPath = path.resolve(__dirname, "../docs/README.pdf");

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  await page.goto(`file://${inputPath}`, { waitUntil: "networkidle0" });

  // just-the-docsのUI要素を非表示にして本文のみPDF化
  await page.addStyleTag({
    content: `
      @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700');
      /* テーマUI要素を非表示 */
      .side-bar, .site-footer, .site-header, .search, .aux-nav,
      .skip-to-main, svg.d-none, .anchor-heading { display: none !important; }
      /* メインコンテンツを全幅に */
      .main { max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
      .main-content-wrap { max-width: 100% !important; padding: 0 !important; }
      .main-content { max-width: 100% !important; }
      /* フォント・基本スタイル */
      body { font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif; font-size: 12px; }
      table { font-size: 11px; border-collapse: collapse; width: 100%; }
      td, th { border: 1px solid #ddd; padding: 5px; }
      tr:nth-child(even) { background-color: #f2f2f2; }
      th { text-align: left; background-color: #ddd; }
      hr { border-top: 1px solid #ddd; margin: 30px 0; }
    `,
  });

  await page.pdf({
    path: outputPath,
    format: "A4",
    margin: { top: "30mm", bottom: "30mm", left: "20mm", right: "20mm" },
    printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<style>section { margin: 0 auto; font-size: 9px; }</style>',
    footerTemplate:
      '<section><div><span class="pageNumber"></span> / <span class="totalPages"></span></div></section>',
  });

  await browser.close();
  console.log(`PDF generated: ${outputPath}`);
})();
