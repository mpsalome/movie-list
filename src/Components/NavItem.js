import { Link } from 'react-router-dom';

export const NavItem = ({ tabinfo }) => {

  const toggleClass = (e) => {
    document.querySelectorAll('.nav-item.active').forEach(function (nav) {
      nav.className = "nav-link nav-item text-secondary"
    });

    if(!e.target.className.includes('active')){
       e.target.classList.add('active','text-light')
       e.target.classList.remove('text-secondary')

      }
  };

  return (
    <Link className='nav-item nav-link text-secondary' to={`${tabinfo.link}`} onClick={toggleClass}>
      {tabinfo.name}
    </Link>
  );
};
