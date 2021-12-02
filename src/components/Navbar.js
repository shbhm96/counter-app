const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-secondary m-2">{props.totalItem}</span>
        <button className="btn btn-info" onClick={props.onReset}>
          Reset
        </button>
      </a>
    </nav>
  );
};
export default Navbar;
