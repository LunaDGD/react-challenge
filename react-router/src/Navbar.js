import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Navbar Router</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/page">Page</a>
      </div>
    </nav>
  );
};

export default Navbar;
