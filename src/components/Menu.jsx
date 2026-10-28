import { NavLink } from 'react-router-dom';

export default function Menu() {
  const setActiveClass = ({ isActive }) => 
    isActive ? 'menu__item menu__item-active' : 'menu__item';

  return (
    <nav className="menu">
      <NavLink to="/" className={setActiveClass}>Главная</NavLink>
      <NavLink to="/drift" className={setActiveClass}>Дрифт-такси</NavLink>
      <NavLink to="/timeattack" className={setActiveClass}>Time Attack</NavLink>
      <NavLink to="/forza" className={setActiveClass}>Forza Karting</NavLink>
    </nav>
  );
}
