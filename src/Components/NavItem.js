import { Link } from 'react-router-dom';

export const NavItem = ({ tabinfo }) => {

  const toggleClass = (e) => {
    document.querySelectorAll('.nav-item.active').forEach(function (nav) {
      nav.className = "nav-item nav-link"
    });

    if(!e.target.className.includes('active')) e.target.classList.add('active')
  };

  return (
    <Link className='nav-item nav-link' to={`${tabinfo.link}`} onClick={toggleClass}>
      {tabinfo.name}
    </Link>
  );
};
