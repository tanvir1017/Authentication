import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase/firebase.config';

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
};
export default initializeAuthentication;