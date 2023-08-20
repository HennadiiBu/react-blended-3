import {
  Container,
  SearchForm,
  Section,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const region = searchParams.get('region');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!region) {
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const resultData = await fetchByRegion(region);
        setCountries(resultData);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [region]);

  const handleSubmit = region => {
    setSearchParams({ region });
  };
  return (
    <Section>
      <Container>
        <SearchForm handleSubmit={handleSubmit} />
        <CountryList countries={countries} />
        {loading && <Loader />}
      </Container>
    </Section>
  );
};
