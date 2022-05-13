import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/config';
import useAuthContext from '../auth/useAuthContext';

const ContinentData = [
  { dbName: 'africa', label: 'Africa', total: 57 },
  { dbName: 'asia', label: 'Asia', total: 50 },
  { dbName: 'europe', label: 'Europe', total: 53 },
  { dbName: 'northamerica', label: 'North America', total: 41 },
  { dbName: 'oceania', label: 'Oceania & Antarctica', total: 30 },
  { dbName: 'southamerica', label: 'South America', total: 14 },
];

const useTripsSnapshot = userId => {
  const [fullData, setFullData] = useState();
  const [countriesData, setCountriesData] = useState();

  const { user } = useAuthContext();

  const createDataObject = obj => {
    const data = Object.entries(obj).map(([continent, countries]) => {
      const continentData = ContinentData.find(c => c.dbName === continent);
      return {
        continent: continentData.label,
        totalCountries: continentData.total,
        countries: countries,
      };
    });
    const sortedData = data.sort((a, b) =>
      a.continent.localeCompare(b.continent)
    );
    return sortedData;
  };

  useEffect(() => {
    if (!userId && !user?.uid) return;

    const id = userId || user.uid;
    let ref = doc(db, 'maps', id);

    const unsub = onSnapshot(ref, doc => {
      const data = doc.data();

      if (!data) return;

      const fullVisited = createDataObject(data.visited);
      const fullWishlist = createDataObject(data.wishlist);
      setFullData({
        name: data.userName,
        visited: fullVisited,
        wishlist: fullWishlist,
      });

      const visitedCountries = fullVisited.flatMap(
        continent => continent.countries
      );
      const wishlistCountries = fullWishlist.flatMap(
        continent => continent.countries
      );
      setCountriesData({
        visited: visitedCountries,
        wishlist: wishlistCountries,
      });
    });

    return () => unsub();
  }, [user?.uid, userId]);

  return { fullData, countriesData };
};

export default useTripsSnapshot;
