// Firebase v9 modular imports for every page
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// TODO: Replace with YOUR real config from Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyCbfdG2XU302FuZx0MapVTRmb3Qtaa-hA8",
    authDomain: "ermunai-e-commerce-project.firebaseapp.com",
    projectId: "ermunai-e-commerce-project",
    storageBucket: "ermunai-e-commerce-project.firebasestorage.app",
    messagingSenderId: "365240050790",
    appId: "1:365240050790:web:2d4867d6ab4f93a661f9a7",
    measurementId: "G-CZJZ4HLCMR"
};

// Make helpers available to pages that import this file
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
