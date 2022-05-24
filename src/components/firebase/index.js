import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, query, where, collection, getDocs, Timestamp, addDoc} from "firebase/firestore/lite"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAl9keTeViaj748-nHlrxhS1j5wjf08xRI",
    authDomain: "graydon-corp.firebaseapp.com",
    projectId: "graydon-corp",    
    storageBucket: "graydon-corp.appspot.com",
    messagingSenderId: "812463209735",
    appId: "1:812463209735:web:d377bac80cbda89ea6d9a2",
    measurementId: "G-NX2NTNKESX"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);
const analytics = getAnalytics(app);

export default firestoreDB;

export async function getAllItems() {
    
    const myCollec = collection(firestoreDB, "items");

    const itemsSnap = await getDocs(myCollec);

    return itemsSnap.docs.map(doc => {
        return {...doc.data(),
        id: doc.id,
        }
    })
}

export async function getItemsByLocation(locationId) {

    const myCollec = collection(firestoreDB, "items");
    const queryItem = query(myCollec, where("location", "==", locationId))
    const itemsSnap = await getDocs(queryItem)

    return itemsSnap.docs.map(doc => {
        return {...doc.data(),
        id: doc.id,
        }
    })
}

export async function getItem(id) {
    
    const myCollec = collection(firestoreDB, "items")
    const itemRef = doc (myCollec, id)
    const itemSnap = await getDoc(itemRef)

    return {...itemSnap.data(), id: itemSnap.id}

}

export async function createBuyOrder(orderData){
    const buyTimestamp = Timestamp.now();
    const orderWithDate = {...orderData, 
        date: buyTimestamp
    };

    const myCollec = collection(firestoreDB, 'orders')
    const orderDoc = await addDoc(myCollec, orderWithDate);

    console.log('Order list ID:', orderDoc.id)
    console.log('Order list:', orderDoc.data);
}