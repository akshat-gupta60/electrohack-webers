let firebaseConfig = {
    apiKey: "AIzaSyC9YgvVoJMSbcmfX8e77WbpZoAyQ48US-M",
    authDomain: "blogging-webers.firebaseapp.com",
    projectId: "blogging-webers",
    storageBucket: "blogging-webers.appspot.com",
    messagingSenderId: "523035713122",
    appId: "1:523035713122:web:9fa97dde0dc575d6d6fb3b"
};


const app = initializeApp(firebaseConfig);


const db=firebase.firestore();