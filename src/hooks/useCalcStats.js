import { useEffect, useState } from 'react';

const useCalcStats = data => {
  const [stats, setStats] = useState({});
  useEffect(() => {
    if (!data) return;

    // Number of countries
    const totalCountries = data.visited.flatMap(
      continent => continent.countries
    ).length;
    const numOfCountries = {
      title: 'Countries',
      percentage: Math.round((totalCountries / 249) * 100),
      numLabel: totalCountries.toString(),
    };

    const precentageOfWorld = ((totalCountries / 249) * 100).toFixed(2);

    // Number of continents
    const totalContinents = data.visited.filter(
      c => c.countries.length > 0
    ).length;
    const numOfContinents = {
      title: 'Continents',
      percentage: Math.round((totalContinents / 6) * 100),
      numLabel: totalContinents.toString(),
    };

    // Stats per continent
    const continentData = data.visited
      .map(c => {
        const percentage = Math.round(
          (c.countries.length / c.totalCountries) * 100
        );
        const continentName =
          c.continent === 'North America'
            ? 'N. America'
            : c.continent === 'South America'
            ? 'S. America'
            : c.continent === 'Oceania & Antarctica'
            ? 'Oceania'
            : c.continent;

        return { title: continentName, percentage };
      })
      .sort((a, b) => b.percentage - a.percentage);

    setStats({
      numOfCountries,
      numOfContinents,
      continentData,
      precentageOfWorld,
    });
  }, [data]);

  return stats;
};

export default useCalcStats;
