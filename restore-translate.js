const fs = require('fs');
const path = require('path');
const dir  = path.join(__dirname, 'rca-site');

// The translate-wrap HTML — globe icon only, no word "Translate"
const TRANSLATE_HTML = `<div class="translate-wrap" id="translateWrap">
          <button class="translate-btn" id="translateBtn" onclick="toggleTranslate()" aria-label="Translate this page" aria-expanded="false" aria-controls="translatePanel">
            <svg class="translate-globe" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"/></svg>
          </button>
          <div class="translate-panel" id="translatePanel" role="dialog" aria-label="Choose language">
            <div class="translate-panel-head">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z"/></svg>
              <span>Choose language</span>
            </div>
            <div class="translate-langs">
              <button class="translate-lang-btn active" onclick="setLang('en',this)"><span class="translate-lang-flag">🇬🇧</span><span class="translate-lang-name">English<span class="translate-lang-native">English</span></span></button>
              <button class="translate-lang-btn" onclick="setLang('fr',this)"><span class="translate-lang-flag">🇫🇷</span><span class="translate-lang-name">French<span class="translate-lang-native">Français</span></span></button>
              <button class="translate-lang-btn" onclick="setLang('es',this)"><span class="translate-lang-flag">🇪🇸</span><span class="translate-lang-name">Spanish<span class="translate-lang-native">Español</span></span></button>
              <button class="translate-lang-btn" onclick="setLang('pt',this)"><span class="translate-lang-flag">🇵🇹</span><span class="translate-lang-name">Portuguese<span class="translate-lang-native">Português</span></span></button>
              <button class="translate-lang-btn" onclick="setLang('sw',this)"><span class="translate-lang-flag">🌍</span><span class="translate-lang-name">Swahili<span class="translate-lang-native">Kiswahili</span></span></button>
              <button class="translate-lang-btn" onclick="setLang('zh-CN',this)"><span class="translate-lang-flag">🇨🇳</span><span class="translate-lang-name">Mandarin<span class="translate-lang-native">普通话</span></span></button>
              <button class="translate-lang-btn" onclick="setLang('de',this)"><span class="translate-lang-flag">🇩🇪</span><span class="translate-lang-name">German<span class="translate-lang-native">Deutsch</span></span></button>
              <button class="translate-lang-btn" onclick="setLang('ar',this)"><span class="translate-lang-flag">🇸🇦</span><span class="translate-lang-name">Arabic<span class="translate-lang-native">العربية</span></span></button>
            </div>
            <div class="translate-panel-note">Powered by Google Translate</div>
          </div>
          <div id="google_translate_element" style="display:none;"></div>
        </div>
        `;

// Google Translate script (goes before </body>)
const GT_SCRIPT = `\n<!-- Google Translate widget loader -->\n<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>`;

// Insertion anchor — translate goes right before the search button in mast-utils
const SEARCH_BTN = '<button class="btn-search"';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));
let n = 0;

for (const f of files) {
  const fp = path.join(dir, f);
  let c = fs.readFileSync(fp, 'utf8');
  const orig = c;

  // ── 1. Insert translate-wrap before search button (only if not already present) ──
  if (!c.includes('id="translateWrap"') && c.includes(SEARCH_BTN)) {
    c = c.replace(SEARCH_BTN, TRANSLATE_HTML + SEARCH_BTN);
  }

  // ── 2. Revert nav-highlight colour back to white ──
  c = c.replace(
    '.nav > li.nav-highlight > a { color: var(--gold); font-weight: 700; }',
    '.nav > li.nav-highlight > a { color: #ffffff; font-weight: 700; }'
  );

  // ── 3. Re-add Google Translate script before </body> (if missing) ──
  if (!c.includes('translate.google.com') && c.includes('</body>')) {
    c = c.replace('</body>', GT_SCRIPT + '\n</body>');
  }

  if (c !== orig) {
    fs.writeFileSync(fp, c, 'utf8');
    console.log(`✅  ${f}`);
    n++;
  } else {
    console.log(`–   ${f}`);
  }
}

console.log(`\nDone. ${n} files updated.`);
