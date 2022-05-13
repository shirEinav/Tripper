import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './config';

export const addInitMapToDB = async user => {
  if (!user) return;
  const docRef = doc(db, 'maps', user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const initUserMap = {
      userName: user.displayName,
      visited: {
        europe: [],
        asia: [],
        africa: [],
        northamerica: [],
        southamerica: [],
        oceania: [],
      },
      wishlist: {
        europe: [],
        asia: [],
        africa: [],
        northamerica: [],
        southamerica: [],
        oceania: [],
      },
    };

    await setDoc(doc(db, 'maps', user.uid), initUserMap);
  }
};
