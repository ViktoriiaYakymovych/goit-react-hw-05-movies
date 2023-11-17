import { StyledForm, StyledInput, StyledBtn } from './SearchMovieForm.styled';

const SearchMovieForm = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={e => onSubmit(e)}>
      <StyledInput
        type="text"
        name="film"
        autoComplete="off"
        autoFocus
        placeholder="Write to search movie..."
      />
      <StyledBtn type="submit">Search</StyledBtn>
    </StyledForm>
  );
};

export default SearchMovieForm;
