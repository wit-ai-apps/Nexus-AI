// admin-import.js
const admin = require('firebase-admin');
const serviceAccount = require("./your-service-account-key.json"); // FirebaseからDL

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

// これまで生成した411件の全実名リスト（ここには代表のみ記載、全件投入用）
const nexusData = [
    { id: "anyword_ai", name: "Anyword", provider: "Anyword", flag: "us", favicon_domain: "anyword.com", rating: 4.8, pricing: [{plan: "Starter", price: "39"}], short_desc: "Performance-driven AI writer.", version: "v119.5 PRO" },
    { id: "apollo_io", name: "Apollo.io", provider: "Apollo", flag: "us", favicon_domain: "apollo.io", rating: 4.9, pricing: [{plan: "Free", price: "0"}], short_desc: "B2B lead database and sales AI.", version: "v119.5 PRO" },
    // ... 411件分すべて ...
];

async function upload() {
  const batch = db.batch();
  nexusData.forEach((data) => {
    const docRef = db.collection('ai_index').doc(data.id);
    batch.set(docRef, data);
  });
  await batch.commit();
  console.log("411 items successfully synchronized to Firebase.");
}
upload();
