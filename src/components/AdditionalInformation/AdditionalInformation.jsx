import { NavLink } from 'react-router-dom';

const AdditionalInformation = ({ movieId }) => {
  return (
    <section>
      <p>Additional information</p>
      <ul>
        <li>
          <NavLink to={`/movies/:${movieId}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`/movies/:${movieId}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
    </section>
  );
};

export default AdditionalInformation;
