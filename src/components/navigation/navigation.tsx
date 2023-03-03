import './navigation.css';

export function Navigation() {
  return (
    <div className="nav-container">
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
    </div>
  );
}
