// 指示⑨: 英語表記の地域と時間
function updateClock() {
  const now = new Date();
  const options = { timeZoneName: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  document.getElementById('clock-display').innerText = now.toLocaleString('en-US', options);
}
setInterval(updateClock, 1000);

// 指示：多次元検索機能 (料金・説明・カテゴリ)
const searchAI = (query) => {
  const filtered = allAIData.filter(ai => {
    const isMatch = ai.name.toLowerCase().includes(query) || 
                    ai.long_desc.toLowerCase().includes(query) ||
                    ai.category.toLowerCase().includes(query);
    
    // 料金検索の隠しロジック (例: "under 20" で数値抽出)
    if (query.includes("under")) {
      const max = parseInt(query.replace(/[^0-9]/g, ''));
      const price = Math.min(...ai.pricing.map(p => parseFloat(p.price)));
      return price <= max;
    }
    return isMatch;
  });
  renderCards(filtered);
};

// 指示：ステルス・カテゴリボタン (かっこいい隠しシステム)
window.addEventListener('wheel', (e) => {
  const nav = document.getElementById('stealth-search-panel');
  if (e.deltaY < -20) { // 上にスクロールで出現
    nav.classList.add('visible');
  } else {
    nav.classList.remove('visible');
  }
});

// 指示：サイトアナリシス (Google連携用スタブ)
function runSiteAnalysis() {
  console.log("Connecting to Google Analytics API v4...");
  // ここにGA4の集計ロジックを走らせる
}
