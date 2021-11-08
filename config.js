import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 apiKey: "AIzaSyDQtXUWkZOi3_xlBfJ931Tvz46TMrjdcb0",
  authDomain: "project-71-86677.firebaseapp.com",
  projectId: "project-71-86677",
  storageBucket: "project-71-86677.appspot.com",
  messagingSenderId: "693063923629",
  appId: "1:693063923629:web:ec10c2fcb550dc91031324" 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

