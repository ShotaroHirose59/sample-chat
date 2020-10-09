import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
  // ここにfirebaseのapi情報をコピペします。
  apiKey: "AIzaSyBS61O-MuQQImS21H1edauVNJOikePTTCo",
  authDomain: "chat-firestore-vue-sampl-bcfbd.firebaseapp.com",
  databaseURL: "https://chat-firestore-vue-sampl-bcfbd.firebaseio.com",
  projectId: "chat-firestore-vue-sampl-bcfbd",
  storageBucket: "chat-firestore-vue-sampl-bcfbd.appspot.com",
  messagingSenderId: "60124533054",
  appId: "1:60124533054:web:77910e5db4fdddd91b1c6f"
});

export const db = firebaseApp.firestore();
