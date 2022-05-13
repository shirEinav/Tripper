import { useMutation } from 'react-query';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const addTrip = async ({ userId, name, code, continent, list }) => {
  const docRef = doc(db, 'maps', userId);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();

  let updatedVisitedContinent;
  let updatedWishlistContinent;

  const dbContinent = continent === 'antarctica' ? 'oceania' : continent;

  const isInVisited = !!data.visited[dbContinent].find(
    country => country.name === name
  );
  const isInWishlist = !!data.wishlist[dbContinent].find(
    country => country.name === name
  );

  if (list === 'visited') {
    updatedVisitedContinent = isInVisited
      ? data.visited[dbContinent]
      : [...data.visited[dbContinent], { code, name }];

    updatedWishlistContinent = isInWishlist
      ? data.wishlist[dbContinent].filter(country => country.name !== name)
      : data.wishlist[dbContinent];
  } else if (list === 'wishlist') {
    updatedWishlistContinent = isInWishlist
      ? data.wishlist[dbContinent]
      : [...data.wishlist[dbContinent], { code, name }];

    updatedVisitedContinent = isInVisited
      ? data.visited[dbContinent].filter(country => country.name !== name)
      : data.visited[dbContinent];
  }

  const finalVisited = {
    ...data.visited,
    [dbContinent]: updatedVisitedContinent,
  };
  const finalWishlist = {
    ...data.wishlist,
    [dbContinent]: updatedWishlistContinent,
  };

  await updateDoc(docRef, {
    visited: finalVisited,
    wishlist: finalWishlist,
  });
};

const useAddTrip = () => {
  return useMutation(addTrip);
};

export default useAddTrip;
