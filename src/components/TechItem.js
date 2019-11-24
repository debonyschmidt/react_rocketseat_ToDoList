import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
  return (
  <li>
  {tech}
  <button onClick={onDelete} type="button">Delete</button>
  </li>
  )
}

TechItem.defaultProps = {
  tech: 'Blank',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;