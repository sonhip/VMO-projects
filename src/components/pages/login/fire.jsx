import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCzeCZi8FeV-ALwf6AHWG1WfN48P_elPp4",
  authDomain: "login-eec04.firebaseapp.com",
  projectId: "login-eec04",
  storageBucket: "login-eec04.appspot.com",
  messagingSenderId: "241179444698",
  appId: "1:241179444698:web:4cabce134affc1adc1ece3",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
