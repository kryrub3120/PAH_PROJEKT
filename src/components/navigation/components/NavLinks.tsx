import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinksProps {
  t: any;
}

export const NavLinks: React.FC<NavLinksProps> = ({ t }) => {
  const links = [
    { to: '/calculator', label: t.calculator || 'Calculator' },
    { to: '/about', label: t.about || 'About' },
    { to: '/store', label: t.store || 'Products' },
  ];

  return (
    <nav className="hidden md:flex items-center gap-6">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `text-gray-600 hover:text-blue-600 transition-colors ${
              isActive ? 'text-blue-600 font-medium' : ''
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};