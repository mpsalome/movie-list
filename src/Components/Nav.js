import { NavItem } from './NavItem';

export const Nav = () => {
  
  const tabs = [
    {
      link: '/',
      name: 'Home'
    },
    {
      link: '/now_playing',
      name: 'Now Playing'
    },
    {
      link: '/top_rated',
      name: 'Top Rated'
    },
    {
      link: '/upcoming',
      name: 'Upcoming'
    }
  ]

  return (
    <nav className="bg-light nav nav-pills nav-justified">
     {tabs.map((tab) => (
          <NavItem key={tab.link} tabinfo={tab}/>
        ))}
    </nav>
  );
};
