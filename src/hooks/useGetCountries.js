import { useQuery } from 'react-query';

const getCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const data = await response.json();
  const finalData = data
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
    .filter(country => country.cca3 !== 'PSE');
  return finalData;
};

const useGetCountries = () => {
  return useQuery('countries', getCountries, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: 10 * 60 * 1000,
  });
};

export default useGetCountries;
