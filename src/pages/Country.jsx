import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const location = useLocation();
  const [country, setCountry] = useState({});
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    if (!countryId) return;
    setIsloading(true);
    fetchCountry(countryId)
      .then(data => setCountry(data))
      .catch(error => console.log(error))
      .finally(setIsloading(false));
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Link to={location.state?.from ?? '/'}>Go back</Link>
        {isLoading && <Loader />}
        <CountryInfo {...country} />
      </Container>
    </Section>
  );
};
