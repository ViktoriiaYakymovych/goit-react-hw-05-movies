import {
  AdditionalList,
  AdditionalSection,
  Link,
} from './AdditionalInformation.styled';

const AdditionalInformation = () => {
  return (
    <AdditionalSection>
      <h3>Additional information</h3>
      <AdditionalList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </AdditionalList>
    </AdditionalSection>
  );
};

export default AdditionalInformation;
