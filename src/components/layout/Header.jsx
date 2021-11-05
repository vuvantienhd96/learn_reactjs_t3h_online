import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import InfoIcon from '@mui/icons-material/Info';
import './header.css';
import { display } from '@mui/system';

const Header = (props) => {
  console.log(props);
  const { brand, name } = props;
  return (
    <div>
      <h2 style={headingCss}>
        {brand} {name}
      </h2>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-danger
      mb-3
      "
      >
        <div className="container">
          <a href="/" className="nav-brand">
            {brand} {name}
          </a>
          <div>
            <nav>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <span style={{ display: 'flex' }}><Link to="/" className="nav-link">Home  <HomeIcon /></Link>
                  </span>
                </li>
                <li className="nav-item">
                  <span style={{ display: 'flex' }}><Link to="/addContact" className="nav-link">Add Contact <AddBusinessIcon /></Link></span>
                </li>
                <li className="nav-item">
                  <span style={{ display: 'flex' }}><Link to="/about" className="nav-link">About <InfoIcon /></Link></span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

// type checking with proptypes
Header.defaultProps = {
  brand: 'Default title',
};

// yarn add prop-types
// npm install prop-types
Header.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const headingCss = { color: 'red', fontSize: '35px' };

export default Header;
