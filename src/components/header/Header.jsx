import './Header.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/Slice';
import { useNavigate } from 'react-router-dom';

function Header() {
  const loc = useLocation();
  const dispatch = useDispatch();
  const navi = useNavigate();
  const isLoggedIn = useSelector((state) => state?.auth?.user?.isLoggedIn);
  const un = useSelector((state) => state?.auth?.user?.user?.username);
  let data = 'Login';

  if (loc.pathname === '/mainpage' || loc.pathname === '/jobdetail') {
    data = 'Logout';
  }

  function handleLogout() {
    dispatch(logout());
    navi('/login');
  }

  return (
    <>
      <header className="Header">
        <nav className="Navbar">
          <div>Job Hunters</div>
          {un ? <div className="nav-name">{un}</div> : <></>}
          <div className="nav-right-list">
            <ul>
              <li>
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="register-btn">
                    {data}
                  </Link>
                )}
              </li>
              {isLoggedIn ? (
                <></>
              ) : (
                <li>
                  <Link to="/register" className="register-btn">
                    Register
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
