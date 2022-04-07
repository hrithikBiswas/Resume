import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBhfW9ACONMYNxXRsK_N8ZbwunxSa_fsU4',
    authDomain: 'portfolio-data-6a594.firebaseapp.com',
    projectId: 'portfolio-data-6a594',
    storageBucket: 'portfolio-data-6a594.appspot.com',
    messagingSenderId: '197637870584',
    appId: '1:197637870584:web:b581d42f89f31159efbc0d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
