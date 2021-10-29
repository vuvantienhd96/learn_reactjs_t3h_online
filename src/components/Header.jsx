import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  home
                </a>
              </li>
            </ul>
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
