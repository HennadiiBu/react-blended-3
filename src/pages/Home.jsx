import { Container, CountryList, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCountries()
      .then(data => setCountries(data))
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
