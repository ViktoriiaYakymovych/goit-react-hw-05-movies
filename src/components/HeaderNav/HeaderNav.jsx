import{ Link } from 'react-router-dom';


const HeaderNav = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
        </ul>
      </nav>
    );
}

export default HeaderNav;