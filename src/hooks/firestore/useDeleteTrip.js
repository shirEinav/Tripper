import { useMutation } from 'react-query';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const deleteTrip = async ({ userId, name, continent }) => {
  const docRef = doc(db, 'maps', userId);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  const dbContinent = continent === 'antarctica' ? 'oceania' : continent;

  const filteredVisitedContinent = data.visited[dbContinent].filter(
    country => country.name !== name
  );
  const filteredWishlistContinent = data.wishlist[dbContinent].filter(
    country => country.name !== name
  );

  const updatedVisited = {
    ...data.visited,
    [dbContinent]: filteredVisitedContinent,
  };

  const updatedWishlist = {
    ...data.wishlist,
    [dbContinent]: filteredWishlistContinent,
  };

  await updateDoc(docRef, {
    visited: updatedVisited,
    wishlist: updatedWishlist,
  });
};

const useDeleteTrip = () => {
  return useMutation(deleteTrip);
};

export default useDeleteTrip;
