import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC1xAZwzNpb7q-9LVkBuuis8GCPdws6ZBE',
  authDomain: 'fbase-host-ninja.firebaseapp.com',
  projectId: 'fbase-host-ninja',
  storageBucket: 'fbase-host-ninja.appspot.com',
  messagingSenderId: '507546728463',
  appId: '1:507546728463:web:815534df12190a8631cb7a',
}

initializeApp(firebaseConfig)
export const db = getFirestore()