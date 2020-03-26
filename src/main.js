import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA4KR6Sno51PGNuCZ_A5wqnAB79ph_f28c",
  authDomain: "vue-firestore-37c6a.firebaseapp.com",
  databaseURL: "https://vue-firestore-37c6a.firebaseio.com",
  projectId: "vue-firestore-37c6a",
  storageBucket: "vue-firestore-37c6a.appspot.com",
  messagingSenderId: "200395993382",
  appId: "1:200395993382:web:6278b9efbe1e58e03851e7",
  measurementId: "G-DBXVGQ287J"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
