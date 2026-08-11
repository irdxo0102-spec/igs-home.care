// =====================================
// IGS HOME CARE - FIREBASE CONNECTION
// =====================================

import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

import { getStorage } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { firebaseConfig } from "./firebase-config.js";


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Firebase services

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);

export default app;
