import { NavLink } from 'react-router-dom';

const AdditionalInformation = () => {
  return (
    <section>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default AdditionalInformation;
