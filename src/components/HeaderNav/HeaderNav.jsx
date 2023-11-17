import { Header, NavUl, Link } from './HeaderNav.styled';

const HeaderNav = () => {
  return (
    <Header>
      <nav>
        <NavUl>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </NavUl>
      </nav>
    </Header>
  );
};

export default HeaderNav;
