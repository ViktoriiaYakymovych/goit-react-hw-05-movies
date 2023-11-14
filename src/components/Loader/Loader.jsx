import { Circles } from 'react-loader-spinner';

const Loader = ({ loading }) => {
  return (
    <Circles
      height="80"
      width="80"
      color="#57c0c8"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={loading}
    />
  );
};

export default Loader;
