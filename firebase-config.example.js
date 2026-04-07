// ── FIREBASE CONFIGURATION TEMPLATE ─────────────────────────
//
// 1. Copy this file and rename the copy to: firebase-config.js
// 2. Fill in your project's values from the Firebase console
// 3. firebase-config.js is gitignored and will never be committed
//
// To get these values:
//   Firebase Console → Project Settings → Your apps → Web app → SDK setup
//
// firebase-config.js must be in the same folder as beltwars.html.
// You will need a local HTTP server to test (not file:// directly):
//   npx serve .
//   or: python -m http.server 8080

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
};
