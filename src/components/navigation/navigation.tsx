import React from 'react';
import './navigation.css';
import { useWindowSize } from '../../hooks/use-window-size/use-window-size';

interface NavigationProps {
  breakpoint?: number;
  onSidebarMenuChanging: (open: boolean) => void;
  direction?: 'horizontal' | 'vertical';
  expandMenu: boolean;
}

export function Navigation({ breakpoint = 900, direction = 'horizontal', expandMenu, onSidebarMenuChanging }: NavigationProps) {
  const { width } = useWindowSize();

  React.useEffect(() => {
    if (isDesktopView() && expandMenu) {
      onSidebarMenuChanging(false);
    }
  }, [width, expandMenu]);

  const isDesktopView = () => width >= breakpoint;
  const showSidebar = () => !isDesktopView() && expandMenu;

  return (
    <div className={`nav-container ${direction}-theme ${showSidebar() ? 'open-sidebar' : ''}`}>
      <menu>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </menu>
      <button className="menu-button" onClick={() => onSidebarMenuChanging(!expandMenu)}>
        {' '}
      </button>
    </div>
  );
}
