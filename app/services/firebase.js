import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: 'AIzaSyCWtWcUNNPE9lTf-6hEfPBJib5OIV5Zh1s',
    authDomain: 'reactseals-movies.firebaseapp.com',
    databaseURL: 'https://reactseals-movies.firebaseio.com',
    projectId: 'reactseals-movies',
    storageBucket: 'reactseals-movies.appspot.com',
    messagingSenderId: '587687214425',
    appId: '1:587687214425:web:3e443157f6a55b251be048',
    measurementId: 'G-76HWE5XF0L'
};
// Initialize Firebase
const Movies_DB = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default Movies_DB;
