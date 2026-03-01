// 指示：ID重複は上書き、名称重複は警告
const rawAIData = [
  // ...ここに411件のJSONデータを貼り付け...
];

// 重複クリーニング処理
const allAIData = Array.from(new Map(rawAIData.map(item => [item.id, item])).values());
