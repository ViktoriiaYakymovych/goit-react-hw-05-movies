const SearchMovieForm = ({ onSubmit }) => {
  return (
    <form onSubmit={e => onSubmit(e)}>
      <input
        type="text"
        name="film"
        autoComplete="off"
        autoFocus
        placeholder="Write to search movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchMovieForm;
