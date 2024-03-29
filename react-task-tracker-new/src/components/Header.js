import PropTypes from "prop-types";
import Button from "./Button.js"

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'slateblue' : 'darkseagreen'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
