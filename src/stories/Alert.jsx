import React from 'react';
import PropTypes from 'prop-types';
import './alert.css'
import Icon from '../Icon';

/**
 * Primary UI component for user interaction
 */
export const Alert = ({ color, label, ...props }) => {
  return (
    <div 
      className={['storybook-alert', `storybook-alert--${color}`].join(' ')} 
      role="alert"
      {...props}>
      <Icon
        aria-hidden
        icon="mobile"
      />
      {label}
    </div>
  );
};

Alert.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

// Alert.defaultProps = {
//   color: "primary",
//   label:"A simple Alert"
// };
