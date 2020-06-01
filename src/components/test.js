import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('Bq0NI6bMzNlTVxLiKSqS').collection('cartItems');
// Another way 
firestore.doc('/users/Bq0NI6bMzNlTVxLiKSqS/cartItems/ViouoU89Y2ifgV3FWVlM');
// For collection
firestore.doc('/users/Bq0NI6bMzNlTVxLiKSqS/cartItems');// here we end up with a collection and not the document ID
